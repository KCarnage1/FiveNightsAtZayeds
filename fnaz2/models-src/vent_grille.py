# Vent grille for the office side walls. Units: mm. Faces +X.
from build123d import *
from viewer.render import render
plate = Box(20, 1150, 1000); plate = fillet(plate.edges().filter_by(Axis.X), 30)
plate = plate - Pos(0, 0, 0) * Box(40, 940, 780)
plate.color = Color("lightslategray")
slats = [Pos(2, 0, -330 + i * 95) * Rot(30, 0, 0) * Box(10, 960, 40) for i in range(8)]
for s in slats: s.color = Color("silver")
screws = [Pos(14, y, z) * Rot(0, 90, 0) * Cylinder(18, 12) for y in (-520, 520) for z in (-440, 440)]
for s in screws: s.color = Color("goldenrod")
render("vent_grille", Compound(children=[plate] + slats + screws), linear_deflection=3, angular_deflection=0.8)
