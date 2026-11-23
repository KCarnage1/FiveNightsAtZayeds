# Music box for the Prize Corner (FNAZ 2). Units: mm. Purple gift-box music box with gold lid, pink bow, side crank and key plate.
from build123d import *
from viewer.render import render
body = Pos(0, 0, 300) * Box(500, 400, 600)
body = fillet(body.edges().filter_by(Axis.Z), 18)
body.color = Color(0.55, 0.3, 0.75)
lid = Pos(0, 0, 640) * Box(540, 440, 80); lid = fillet(lid.edges().filter_by(Axis.Z), 22); lid.color = Color("goldenrod")
band = Pos(0, 0, 300) * Box(60, 408, 604); band.color = Color("goldenrod")
band2 = Pos(0, 0, 300) * Box(508, 60, 604); band2.color = Color("goldenrod")
bow = Pos(0, 0, 740) * Sphere(70); bow.color = Color("hotpink")
loop1 = Pos(-110, 0, 735) * Rot(0, 0, 0) * Sphere(80); loop1.color = Color("hotpink")
loop2 = Pos(110, 0, 735) * Sphere(80); loop2.color = Color("hotpink")
crank_shaft = Pos(275, 0, 330) * Rot(0, 90, 0) * Cylinder(14, 90); crank_shaft.color = Color("silver")
arm = Pos(335, 0, 380) * Box(18, 18, 110); arm.color = Color("silver")
knob = Pos(335, 0, 440) * Sphere(26); knob.color = Color("tomato")
plate = Pos(0, 205, 380) * Box(130, 12, 130); plate.color = Color("khaki")
key = Pos(0, 214, 380) * Box(18, 6, 60); key.color = Color(0.35, 0.3, 0.3)
feet = [Pos(x, y, -15) * Cylinder(32, 30) for x in (-200, 200) for y in (-150, 150)]
for f in feet: f.color = Color("goldenrod")
render("music_box", Compound(children=[body, lid, band, band2, bow, loop1, loop2, crank_shaft, arm, knob, plate, key] + feet), linear_deflection=3, angular_deflection=0.8)
