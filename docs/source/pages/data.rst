Methodology and data
====================

[TEXT]

The process for implementing a 3D interactive interface was defined as follows:

1.	**historiographic investigation**
2.	**in situ survey and final products generation**
3.	**web platform implementation and documentation**

Historiographic investigation
-----------------------------

First, an historical study of the artifact was conducted with direct and undirect documentation of the site history. Cartographies preserved in the official Italian State Archives of Parma made it possible to reconstruct the construction and deconstruction steps of the surveyed artifact, providing a preliminary basis for both evaluating its context and planning the subsequent survey. 


Survey
------------------

The in-situ survey consisted in a combination of different techniques:

* a traditional topographic survey (total station + GNSS)
* UAV photogrammetry
* TLS for a complete 3D reconstruction
 
The materialization of a topographic network by using a total station defined a local referenced system. Within the local refence system, a series of targets and/or natural features were measured and adopted as Ground Control Points (GCPs) or Check Points (CPs) for the UAV photogrammetric block. This was carried out with off-the-shelves UAVs DJI Mavic 2 Pro and DJI Phantom 4 RTK, carrying compact RGB cameras and allowed to acquire images of the outdoor environment.  The acquired images were processed with a traditional Structure from Motion approach (SfM) (Westoby et al., 2012). Additionally, TLS allowed for a fast acquisition of dense point clouds of both outdoor and indoor spaces. Finally, measuring of 3-5 targets with a topographic-grade GNSS antenna allowed for roto-translating the local reference system to the global system WGS84 – UTM Zone 32 N.  After an appropriate georeferencing, combining different survey techniques together made it possible to achieve a complete reconstruction of site. The point clouds resulting from the photogrammetric and TLS acquisitions were compared, evaluating cloud-to-cloud distances on overlapping regions to assess the quality and the coherence of the products. After that, point clouds were integrated and used for deriving other 3D products, such as triangulated meshes and tiled models (i.e., hierarchical data structure for storing large 3D models though a regular grid structure).


Web Platform implementation
---------------------------

After 3D modelling of the construction and deconstruction phases of the castle based on historical documentation, these products, together with 3D model of each historical construction step, were included in web platform for digital twin exploration with storytelling features. For this purpose, two open-source tools with different peculiarities were evaluated: Potree WebGL (Schütz, 2016) for its optimised rendering of large point clouds.

