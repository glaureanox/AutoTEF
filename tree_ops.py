import time
import pyautogui as pg 

def find_arrows_and_click():
    while True:
        try:
            arrows = list(pg.locateAllOnScreen("./img/closed_arrow.png", confidence=0.8))
        
            for arrow in arrows:
                x = arrow.left 
                y = arrow.top + arrow.height // 2
                pg.moveTo(x=x, y=y)
                pg.click()  
            
            return
        
        except Exception as e:
            print(e)        
        
        
find_arrows_and_click()