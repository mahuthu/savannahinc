# Deployment Guide for Savannah

This guide explains how to deploy the containerized **Savannah** application (Django + React) to your remote VM along with FormIQ.

## 1. Prerequisites
- Docker and Docker Compose installed on the VM.
- Port **8011** (Frontend) and **8010** (Backend) must be open in your VM's firewall (Azure NSG).

## 2. Environment Configuration
On your VM, navigate to the `savannahinc/savannahinc` directory and ensure your `.env` (or Django settings) is ready for production.

### Django Settings Notice:
Ensure `ALLOWED_HOSTS` includes your VM IP (`20.250.163.236`) and your domains (`savannahinc.co.ke`).

## 3. Run the Stack
Run the following command to build and start the Savannah application:

```bash
cd savannahinc/savannahinc
docker compose up -d --build
```

### Initial Setup (Database & Admin):
Run these commands after the containers are up:

```bash
# Run migrations
docker compose exec backend python manage.py migrate

# Create a superuser for the admin dashboard
docker compose exec backend python manage.py createsuperuser
```

## 4. Accessing the Application
- **Frontend**: `http://20.250.163.236:8011`
- **Backend/Admin**: `http://20.250.163.236:8011/admin`

The internal Nginx will automatically bridge your React frontend with the Django API.

---

### Port Overview:
- **Port 8011**: Main Entry (React + Nginx Proxy)
- **Port 8010**: Direct Backend (Gunicorn)
- **Port 9000**: FormIQ (Isolated)
- **Port 8080**: Kofia (Isolated)
