from functools import reduce

head_center = '''
<div class="row">
    <div class="2u"></div>
    <div class="3u">
        <i class="fa fa-square-o fa-5x box-right" aria-hidden="true"></i>
    </div>
    <div class="5u">
        <center>
            <h3><b>'''

mid = "</b></h3>"

foot_center = '''
        </center>
    </div>
</div>
<hr>
'''

goals = {
    "LIBRARY BOOK DROP": "So you save time and don't accrue fines!",
    "SECOND FLOOR PRINTER": "Because you shouldn't have to hand something in late if you can't get into the library.",
    "MONTHLY TOWN HALL MEETINGS": "So you can stay up to date.",
    "A REDUCED FALL WORKLOAD": "So you can focus on getting into Harvard (or, rather, any college you wish).",
    "AN OPEN ADVISORY COUNCIL": "So everyone who wants to can get involved.",
    "BIGGER DESKS FOR AP AND STANDARDIZED EXAMS": "So you have space to succeed.",
    "AN OPEN IDEA EXCHANGE PLATFORM": "So your voice can be heard, because you are the most important member of the Maszlo team!",
    "A SUMMER COLLEGE TRIP": "To make up for lost time.",
    "TAMPON AND PAD DISPENSERS IN MORE GIRLS BATHROOMS": "For the times when they're needed.",
    "OUT FOR 2ND, 3RD, AND 9TH FREE": "A simple change to a strange policy.",
    "FROM 7 TO 6: FEWER REQUIRED CLASSES": "So that you have more time to enjoy senior year.",
    "MORE VENDING MACHINES": "So that those with 8th-period lunch don't have to sneak into the cafeteria just to make it through the day.",
    "FREE CANDY ON MONDAYS": "So that the worst day becomes the best one.",
    "BEANBAGS": "For relaxing free periods.",
    "THE BEST PROM IMAGINABLE": "So the four years will be worth it.",
    "FREE LUNCH? REDUCED PRICE PROM!": "So that finances don't keep anyone from prom.",
    "A PLATFORM FOR SCHOOL SPIRIT DAY IDEA CONTRIBUTIONS": "Because school spirit is about you.",
    "TOILET PAPER REPLENISHMENT THROUGHOUT THE DAY": "So you don't have to worry about finding a place to go.",
}


def runCenter():
    s = ""
    for goal in goals:
        s += head_center + goal + mid + goals[goal] + foot_center
    f = open('goalsCenter.dat', 'w')
    f.write(s)
    f.close()

def driver():
    runCenter()

driver()