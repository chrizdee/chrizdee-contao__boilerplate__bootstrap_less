Contao 3.5.x Boilerplate [beta]
=============================

Bei jeder Contao-Installation führt man am Anfang meist immer die gleichen Schritte durch. Module für Navigation, Mitglieder-Login, Nachrichten oder auch Stichwortsuche anlegen, anschließend Layouts und Kontakformulare definieren und die Standardseiten (Startseite, News, Kontakt etc.) erstellen.

Um hierbei Zeit zu sparen, wurde ein Website-Template erstellt, in dem obige Einstellungen bereits erledigt sind.

Anleitung
---------

1. Contao herunterladen und auf den Webserver hochladen
2. Boilerplate-Dateien hochladen
3. Contao-Installation starten
4. Zuerst die Standard-Datenbank installieren
5. Anschließend das Template installieren

Zugangsdaten zum Backend
------------------------

- Benutzer: admin
- Passwort: adminadmin

Hinweise
--------

Die Inhalte des Header, Sidebar und Footer werden zentral und für den Redakteur einfach pflegbar, unter Menü Inhalte > Template-Elemente verwaltet und per insert_article dem Layout zugewiesen.

Die Einbindung individueller CSS- und Javascript-Dateien erfolgt über die Datei /templates/inc.head_tags.php. In meinem persönlichen Workflow hat sich dies als recht praktisch erwiesen, da man die Datei immer im Editor geöffnet lassen und ergänzen kann.

Individueller Javascript-Code wird über die Datei /files/layout/js/app.js verwaltet. CSS wird mittels LESS geschrieben und kommt bei mir immer in die Datei /files/layout/css/style.less.

Weiterhin verwendet diese Vorlage Bootstrap 3.