import cv2
import numpy as np

def process_image(image_path):
    # Open image
    img = cv2.imread(image_path)

    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Apply threshold
    _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

    # Find contours
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Draw contours
    cv2.drawContours(img, contours, -1, (0, 255, 0), 2)

    # Save processed image
    cv2.imwrite('processed_image.jpg', img)

    return 'processed_image.jpg'