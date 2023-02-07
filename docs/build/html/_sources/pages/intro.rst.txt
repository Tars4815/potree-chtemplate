Introduction
==================

This documentation describes in details how the Potree basic viewer was customised in order to develop a dedicated web platform for the interactive exploration of the digital twin of the **Farnese Castle** located in Piacenza (Italy).

A working example of this project can be found on the Politecnico di Milano DICA `LabMGF website. <https://labmgf.dica.polimi.it/pujob/potree-template/>`__

Project Context
----------------

The project is the result of surveys conducted between 2021 and 2022.
The context in which it was designed and developed was a series of in situ laboratories for the course **Tecniche di rilievo e modellazione 3D per l'architettura** (EN: *Topographic survey and 3D modeling for architecture*) from the Architectural Design curriculum offered in the Piacenza campus of Politecnico di Milano.
Additional data collection, processing and historiographic investigation were conducted in the framework of the Bachelor thesis *Riscoprire il gigante sommerso - Rilievo, indagine storica e ricostruzione digitale del Castello di Pierluigi Farnese* by Michele Dondi and Clara Rivieri.
The implementation of the 3D web interactive platform was carried out by Federica Gaspari, Federico Barbieri and Francesco Ioli from the `Geodetic and Photogrammetric Laboratory <https://labmgf.dica.polimi.it/>`__ of Politecnico di Milano.

.. image:: IMG/arsenale-pic.JPG
  :align: center
  :alt: Picture of San Benedetto bastion of Farnese Castle


Farnese Castle
--------------

The geometric reconstruction and digital representation has been applied for the case study of the **Farnese Castle**.
This pentagonal plan structure commissioned by Duke Pier Luigi Farnese in the XVI century is in the southern part of the city of Piacenza (Adorni B., 1889). Today it is the site of the Polo di Mantenimento Pesante Nord (former Military Arsenal).

.. raw:: html

	<div style="position: relative; height: 0; overflow: hidden; max-width: 100%; height: auto;">
		<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=9.666574001312258%2C45.04581423573891%2C9.694168567657472%2C45.05580428318172&amp;layer=mapnik&amp;marker=45.05080947757892%2C9.680371284484863" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=45.0508&amp;mlon=9.6804#map=16/45.0508/9.6804">View Larger Map</a></small>
	</div>

The area consists in a surface of approximately 10 hectars. As a result of a process of dismantling portions of the castle during the XVIII century, only 3 of the original 5 ramparts are now visible together with one of the curtain walls.
Also, only two rampart indoor areas are accessible, containing an exhibition with documents and artifacts related to the history of Piacenza.

.. image:: IMG/castle-rendering.jpg
  :align: center
  :alt: Rendering of the original structure of Farnese Castle


Acknowledgement
---------------

The project authors would like to thank arch. Marcello Spigaroli and the Ente Farnese for the stimulating and exciting research opportunity
provided by the survey of the Castle. Dutiful thanks go to those people who with courteous patience
facilitated the research at the archives, libraries and during the operations
survey. In particular, a special acknowledge goes to Gen. Eugenio Gentile, the Military Arsenal
of Piacenza and the Historical Archives of Parma for their availability.




