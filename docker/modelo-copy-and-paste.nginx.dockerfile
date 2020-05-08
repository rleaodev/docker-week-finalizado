FROM nginx:alpine

COPY ./docker/config/modelo-copy-and-paste.nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
