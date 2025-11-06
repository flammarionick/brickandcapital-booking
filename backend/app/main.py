# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.database import create_db_and_tables
from app.routers import listings, enquiries

app = FastAPI(
    title="Brick & Capital Booking API",
    description="API for managing serviced apartment bookings",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL, "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables on startup
@app.on_event("startup")
def on_startup():
    create_db_and_tables()

# Include routers
app.include_router(listings.router, prefix="/listings", tags=["Listings"])
app.include_router(enquiries.router, prefix="/enquiries", tags=["Enquiries"])

@app.get("/")
def read_root():
    return {
        "message": "Brick & Capital Booking API",
        "docs": "/docs",
        "version": "1.0.0"
    }