function initiateprint() {
	var pForm = document.getElementById("personaldata");
	var pname = pForm.elements[0].value; + ' ' + pForm.elements[1].value;
	var paddress = pForm.elements[2].value;
	var ptown = pForm.elements[3].value + ' ' + pForm.elements[4].value;

	var fForm = document.getElementById("company");
	var fname = fForm.elements[0].value;
	var faddress = fForm.elements[1].value;
	var ftown = fForm.elements[2].value + ' ' + fForm.elements[3].value;

	print(fname, '', faddress, ftown, pname, paddress, ptown)
}

function print(fname, fperson, faddress, ftown, pname, paddress, ptown) {
	var currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear();
	//start of page-generation
	var doc = new jsPDF('p', 'mm', 'a4');
	doc.setFontSize(10)
	doc.setFont("helvetica")
	doc.text(20, 35, pname + '•' + paddress + '•' + ptown)
	
	doc.setFontSize(12)
	doc.text(20, 50, fname)
	doc.text(20, 55, fperson)
	doc.text(20, 60, faddress)
	doc.text(20, 65, ftown)
	
	doc.setFontSize(10)
	doc.text(158, 85, 'Datum')
	doc.setFontSize(12)
	doc.text(158, 90, day + '.' + month + '.' + year)
	
	doc.setFont('helvetica', 'bold')
	doc.text(24, 98, 'Auskunft nach Artikel 15 DSGVO')
	
	doc.setFont('helvetica', 'normal')
	doc.text(24, 110, 'Sehr geehrte Damen und Herren,')
	
	
	doc.text(24, 118, 'ich bitte hiermit um Auskunft gemäß Art. 15 DSGVO. Bitte bestätigen Sie mir, ob Sie')
	doc.text(24, 123, 'mich betreffende personenbezogene Daten verarbeiten (vgl. Art. 4 Nr. 1 und 2 DSGVO)')
	doc.text(24, 133, 'In diesem Fall bitte ich Sie im Sinne des Art. 15 Abs. 1 DSGVO um Auskunft über')
	doc.text(30, 140, '1. sämtliche personenbezogenen Daten, die Sie zu meiner Person gespeichert haben')
	doc.text(30, 145, '2. die Verarbeitungszwecke')
	doc.text(30, 150, '3. die Kategorien personenbezogener Daten, die verarbeitet werden')
	doc.text(30, 155, '4. die Empfänger oder Kategorien von Empfängern, gegenüber denen die')
	doc.text(35, 160, 'personenbezogenen Daten offengelegt worden sind oder noch offengelegt werden')
	doc.text(30, 165, '5. falls möglich die geplante Dauer, für die die personenbezogenen Daten')
	doc.text(35, 170, 'gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung')
	doc.text(35, 175, 'dieser dauer')
	doc.text(30, 180, '6. wenn die personenbezogenen Daten nicht bei mir erhoben wurden, alle')
	doc.text(35, 185, 'verfügbaren Informationen über die Herkunft der Daten')
	doc.text(30, 190, '7. falls zutreffend, das Bestehen einer automatisierten Entscheidungsfindung')
	doc.text(35, 195, 'einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und – sofern gegeben –')
	doc.text(35, 200, 'aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die')
	doc.text(35, 205, 'angestrebten Auswirkungen einer derartigen Verarbeitung meine Person.')
	doc.text(24, 213, 'Sofern Sie meine personenbezogenen Daten an ein Drittland oder an eine internationale')
	doc.text(24, 218, 'Organisation übermitteln, bitte ich über die geeigneten Garantien gemäß Art. 46 DSGVO')
	doc.text(24, 223, 'im Zusammenhang mit der Übermittlung unterrichtet zu werden.')
	
	doc.text(24, 230, 'Meine Anfrage schließt explizit auch sämtliche weiteren Angebote und Unternehmen ein,')
	doc.text(24, 235, 'für die Sie Verantwortlicher im Sinne des Art. 4 Nr. 7 DSGVO sind.')
	
	doc.text(24, 243, 'Die Auskunft ist nach Art. 12 Abs. 3 DSGVO unverzüglich, in jedem Fall aber innerhalb')
	doc.text(24, 248, 'eines Monats nach Eingang der Anfrage zu erteilen. Sie hat nach Art. 15 Abs. 3 DSGVO')
	doc.text(24, 253, 'kostenlos zu erfolgen.')
	
	doc.addPage()
	doc.text(24, 35, 'Sollten Sie meiner Anfrage nicht innerhalb der genannten Frist nachkommen, behalte')
	doc.text(24, 40, 'ich mir vor rechtliche Schritte gegen Sie einzuleiten und Beschwerde bei der')
	doc.text(24, 45, 'zuständigen Datenschutzaufsichtsbehörde einzureichen.')
	
	doc.text(24, 55, 'Mit freundlichen Grüßen')
	doc.text(24, 60, pname)
	
	doc.save('DSGVO.pdf')
}