# Desk fan for the office desk. Units: mm.
from build123d import *
from viewer.render import render
base = Cylinder(110, 30); base.color = Color("lightslategray")
stem = Pos(0, 0, 140) * Cylinder(16, 250); stem.color = Color("silver")
motor = Pos(0, 20, 300) * Rot(90, 0, 0) * Cylinder(55, 120); motor.color = Color("lightslategray")
hub = Pos(0, -50, 300) * Rot(90, 0, 0) * Cone(36, 24, 40); hub.color = Color("goldenrod")
blades = []
for a in range(0, 360, 90):
    b = Pos(0, -52, 300) * Rot(0, a, 0) * Pos(0, 0, 85) * Rot(0, 0, 20) * Box(60, 6, 130)
    b.color = Color("skyblue"); blades.append(b)
guard = Pos(0, -50, 300) * Rot(90, 0, 0) * Torus(175, 6); guard.color = Color("silver")
rings = [Pos(0, -50, 300) * Rot(90, 0, 0) * Torus(r, 4) for r in (60, 115)]
for r in rings: r.color = Color("silver")
rods = [Pos(0, -50, 300) * Rot(0, a, 0) * Pos(0, 0, 100) * Box(5, 5, 160) for a in range(0, 180, 30)]
for r in rods: r.color = Color("silver")
render("desk_fan", Compound(children=[base, stem, motor, hub, guard] + blades + rings + rods), linear_deflection=3, angular_deflection=0.8)
