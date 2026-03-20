FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY public /usr/share/nginx/html
  frontend:
    image: nginx:alpine
    container_name: frontend_app
    volumes:
      - ./frontend:/usr/share/nginx/html
    ports:
      - "3000:80"