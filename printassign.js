async function addTextToPDF() {
    const fileInput = document.getElementById('pdfFileInput');
    var textInput = document.getElementById('course_code').value;
    textInputTemp = course_details[textInput].name;
    // if (fileInput.files.length === 0) {
    //   alert('Please select a PDF file.');
    //   return;
    // }
    
        // var xpos=parseInt(prompt("x position:"));
        // var ypos=parseInt(prompt("y position:"));
    
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async function() {
      const pdfBytes = new Uint8Array(reader.result);
      const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes);

      const timesNewRomanFont = await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRoman);

      const page = pdfDoc.getPages()[0];
      page.drawText(await textInputTemp, {
        x: 210,
        y: 350,
        size: 12,
        font: timesNewRomanFont,
        color: PDFLib.rgb(0, 0, 0),
      });

      textInputTemp=await course_details[textInput].code;

            page.drawText(await textInputTemp, {
        x: 210,
        y: 317,
        size: 12,
        font: timesNewRomanFont,
        color: PDFLib.rgb(0, 0, 0),
      });

      textInputTemp = await document.getElementById('assign_name').value;

        page.drawText(await textInputTemp, {
        x: 210,
        y: 284,
        size: 12,
        font: timesNewRomanFont,
        color: PDFLib.rgb(0, 0, 0),
      });

      textInput=await document.getElementById('roll').value+'';

      textInputTemp=await student_data['n'+textInput].name;
        page.drawText(await textInputTemp, {
        x: 120,
        y: 185,
        size: 12,
        font: timesNewRomanFont,
        color: PDFLib.rgb(0, 0, 0),
      });

      textInputTemp=await textInput;
        page.drawText(await textInputTemp, {
        x: 110,
        y: 170,
        size: 12,
        font: timesNewRomanFont,
        color: PDFLib.rgb(0, 0, 0),
      });

      textInputTemp=await student_data['n'+textInput].section;
        page.drawText(await textInputTemp, {
        x: 130,
        y: 153,
        size: 12,
        font: timesNewRomanFont,
        color: PDFLib.rgb(0, 0, 0),
      });

      textInputTemp=await student_data['n'+textInput].series+'';
        page.drawText(await textInputTemp, {
        x: 120,
        y: 135,
        size: 12,
        font: timesNewRomanFont,
        color: PDFLib.rgb(0, 0, 0),
      });

      textInput=await document.getElementById('teacher_name').value;

      textInputTemp=await teacher_list[textInput].name;
        page.drawText(await textInputTemp, {
        x: 320,
        y: 185,
        size: 12,
        font: timesNewRomanFont,
        color: PDFLib.rgb(0, 0, 0),
      });

    textInputTemp=  await teacher_list[textInput].designation;
       page.drawText(await textInputTemp, {
            x: 320,
            y: 170,
            size: 12,
            font: timesNewRomanFont,
            color: PDFLib.rgb(0, 0, 0),
        });

          textInputTemp=  'Rajshahi University of Engineering and';
       page.drawText(await textInputTemp, {
            x: 320,
            y: 155,
            size: 12,
            font: timesNewRomanFont,
            color: PDFLib.rgb(0, 0, 0),
        });

          textInputTemp=  'Technology';
       page.drawText(await textInputTemp, {
            x: 320,
            y: 140,
            size: 12,
            font: timesNewRomanFont,
            color: PDFLib.rgb(0, 0, 0),
        });

      
      const modifiedPDFBytes = await pdfDoc.save();
      const blob = new Blob([modifiedPDFBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'modified_pdf.pdf';
      link.click();

      URL.revokeObjectURL(url);
    };

    reader.readAsArrayBuffer(file);
  }