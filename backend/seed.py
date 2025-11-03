from app.db import SessionLocal
from app.models import Listing
from app.schemas import ListingCreate

def seed():
    db = SessionLocal()
    if db.query(Listing).count() == 0:
        db.add_all([
            Listing(
                title="Elegant 3-Bedroom Serviced Apartment in Wandsworth, London",
                description=(
                    "Spacious, bright 3BR with full kitchen, dining for six, and premium bedding. "
                    "Ideal for families & corporate stays. Minutes from transport, river walks, and local cafés."
                ),
                location="Wandsworth, London",
                price_per_night=322,
                max_guests=6,
                image_url="/images/wandsworth/01.jpg"
            )
        ])
        db.commit()
        print("Seeded Brick & Capital default listing.")
    else:
        print("Listings already exist.")
    db.close()

if __name__ == "__main__":
    seed()