# Round party table with cloth, hat and cupcake. Units: mm. Top at 800.
from build123d import *
from viewer.render import render
top = Pos(0, 0, 790) * Cylinder(700, 40); top.color = Color("white")
cloth = Pos(0, 0, 700) * Cone(560, 720, 180); cloth.color = Color(0.95, 0.9, 0.95)
ped = Pos(0, 0, 400) * Cylinder(40, 700); ped.color = Color("lightslategray")
foot = Pos(0, 0, 15) * Cylinder(220, 30); foot.color = Color("lightslategray")
hat = Pos(180, 120, 970) * Cone(110, 6, 300); hat.color = Color("hotpink")
pom = Pos(180, 120, 1125) * Sphere(22); pom.color = Color("gold")
stripes = [Pos(180, 120, 840 + i * 70) * Torus(100 - i * 22, 6) for i in range(3)]
for s in stripes: s.color = Color("gold")
cup = Pos(-150, -60, 850) * Cone(70, 90, 100); cup.color = Color("skyblue")
icing = Pos(-150, -60, 940) * Sphere(95); icing.color = Color("hotpink")
cherry = Pos(-150, -60, 1030) * Sphere(26); cherry.color = Color("red")
render("party_table", Compound(children=[top, cloth, ped, foot, hat, pom, cup, icing, cherry] + stripes), linear_deflection=3, angular_deflection=0.8)
