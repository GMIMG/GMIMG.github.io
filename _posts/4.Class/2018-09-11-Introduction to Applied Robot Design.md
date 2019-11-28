---
title: Applied Robot Design(응용로봇설계)
category: Class
tags:
    - Robot
---

로봇 메커니즘 설계에서 바뀜  
텀프가 있음  
jyk76@seoultech.ac.kr  
[www.hrrlab.com](www.hrrlab.com) -> Lecture -> Applied Robot Design  
모터의 스펙을 어떻게 뽑아내느냐?  
책 : Robot modeling and control (M.W Spong)  
중간발표 없을듯

## Components and Structure of Robots

- Symbolic Representation of Robots
  
  Robot manipulators are composed of `links` connected `joints` into a kinematic chain.

  A revolute joint allows relative rotation between two links, a prismatic joint allows a linear relative motion between two links.


- Degrees of Freedom
  
  The number of joints determines the DOF of the manipulator.

  A typical manipultatorshould possess at least six independent DOF : three for `positioning` and three for `orientation`

- Common Kinematic Arrangements
  - Articulated configuration (RRR)
  - Spherical configuration (RRR)
  - SCARA configuration (RRP)
  - Cylindrical configuration (RPP)
  - Cartesion Configuration(PPP)
  - Parallel Inanipulator
  
1. Forward Kinematics
2. Inverse Kinematics
3. Path Planning and Trakectory Generation
4. Dynamics
5. Actuator Design
6. Joint Mechanism Design
7. Timing Pulley & Belt Dsign
8. 2D & 3D CAD Design

# Rigid Motions and Homogeneous Transformations

Robot kinematics is concerned with the establishment of various coordinate systems to represent the postion and orentations of rigid objects and with transformations among these coordinate frames.

Homogeneous transformations combine the operations of `rotation and translation` into a single matrix multiplication and this is used to derive the forward kinematic equations.

Representing Rotations
