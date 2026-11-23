# The guard's flashlight. Units: mm, ~260 long, axis along X.
from build123d import *
from viewer.render import render
body = Pos(0, 0, 0) * Rot(0, 90, 0) * Cylinder(22, 170); body.color = Color("tomato")
grip = [Pos(x, 0, 0) * Rot(0, 90, 0) * Torus(22, 3) for x in range(-60, 70, 20)]
for g in grip: g.color = Color("firebrick")
head = Pos(110, 0, 0) * Rot(0, 90, 0) * Cone(22, 40, 70); head.color = Color("lightslategray")
lens = Pos(147, 0, 0) * Rot(0, 90, 0) * Cylinder(36, 6); lens.color = Color("lightyellow")
rim = Pos(145, 0, 0) * Rot(0, 90, 0) * Torus(38, 5); rim.color = Color("silver")
button = Pos(30, 0, 24) * Box(30, 14, 8); button.color = Color("gold")
cap = Pos(-88, 0, 0) * Sphere(23); cap.color = Color("lightslategray")
render("flashlight", Compound(children=[body, head, lens, rim, button, cap] + grip), linear_deflection=3, angular_deflection=0.8)
