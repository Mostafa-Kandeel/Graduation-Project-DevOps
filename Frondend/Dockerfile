# Multi-stage build for static website

FROM nginx:stable-alpine AS builder
# Install curl for health checks
RUN apk add --no-cache curl

# Create necessary directories
RUN mkdir -p /etc/nginx/sites-available /etc/nginx/sites-enabled
RUN mkdir -p /var/www/lanwave /var/log/nginx

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf
COPY sites-available/ /etc/nginx/sites-available/
#COPY sites-enabled/ /etc/nginx/sites-enabled/

# Copy static website files
COPY index.html /var/www/lanwave/
COPY style.css /var/www/lanwave/
COPY app.js /var/www/lanwave/
COPY images/ /var/www/lanwave/images/


# Create symlink for site configuration
RUN ln -sf /etc/nginx/sites-available/lanwave.conf /etc/nginx/sites-enabled/

# Set proper ownership
RUN chown -R nginx:nginx /var/www/lanwave

# Test nginx configuration
RUN nginx -t

# Production stage
FROM nginx:stable-alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Copy validated configurations from builder
COPY --from=builder /etc/nginx/ /etc/nginx/
COPY --from=builder /var/www/lanwave /var/www/lanwave

# Create necessary directories and set permissions
RUN mkdir -p /var/log/nginx /var/cache/nginx/client_temp \
    && chown -R nginx:nginx /var/log/nginx /var/cache/nginx /var/www/lanwave \
    && chmod -R 755 /var/www/lanwave \
    && chmod 644 /etc/nginx/nginx.conf /etc/nginx/sites-available/lanwave.conf

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
