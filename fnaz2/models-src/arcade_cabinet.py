# Arcade cabinet (Game Area). Units: mm, ~1800 tall.
from build123d import *
from viewer.render import render
side = Polygon((0, 0), (800, 0), (800, 1000), (620, 1150), (620, 1800), (0, 1800), (0, 0), align=None)
body = extrude(side, 760); body = Rot(90, 0, 0) * body; body = Pos(-400, 380, 0) * body
body.color = Color(0.25, 0.4, 0.8)
screen = Pos(-70, 0, 1400) * Box(8, 560, 460); screen.color = Color("deepskyblue")

marquee = Pos(10, 0, 1660) * Box(20, 700, 180); marquee.color = Color("gold")
panel = Pos(150, 0, 1000) * Rot(0, -15, 0) * Box(420, 700, 40); panel.color = Color("tomato")
stick_base = Pos(190, -170, 1030) * Cylinder(30, 12); stick_base.color = Color("silver")
stick = Pos(190, -170, 1090) * Cylinder(10, 120); stick.color = Color("silver")
ball = Pos(190, -170, 1170) * Sphere(32); ball.color = Color("tomato")
buttons = [Pos(170 - i % 2 * 20, 40 + (i // 2) * 70, 1030 + i % 2 * 12) * Cylinder(28, 18) for i in range(6)]
cols = ["gold", "limegreen", "hotpink", "white", "orange", "cyan"]
for b, c in zip(buttons, cols): b.color = Color(c)
coin = Pos(330, 0, 700) * Box(14, 140, 220); coin.color = Color("goldenrod")
slot = Pos(338, 0, 740) * Box(8, 60, 10); slot.color = Color(0.4, 0.4, 0.4)
render("arcade_cabinet", Compound(children=[body, screen, marquee, panel, stick_base, stick, ball, coin, slot] + buttons), linear_deflection=3, angular_deflection=0.8)
