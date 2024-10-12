from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models import CartItem
from pydantic import BaseModel

router = APIRouter()

class CartItemCreate(BaseModel):
    user_id: int
    product_id: int
    quantity: int

@router.post("/cart/")
def add_to_cart(cart_item: CartItemCreate, db: Session = Depends(get_db)):
    db_cart_item = CartItem(**cart_item.dict())
    db.add(db_cart_item)
    db.commit()
    db.refresh(db_cart_item)
    return db_cart_item

@router.get("/cart/{user_id}")
def get_cart(user_id: int, db: Session = Depends(get_db)):
    return db.query(CartItem).filter(CartItem.user_id == user_id).all()
