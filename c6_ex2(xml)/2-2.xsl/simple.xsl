<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <body style="font-family:Arial;font-size:12pt;background-color:#EEEE00">
    <xsl:for-each select="breakfast_menu/food">
      <div style="background-color:darkblue;color:yellow;padding:14px">
        <span style="font-weight:bold; color:orange"><xsl:value-of select="name"/> ===> </span>
        <xsl:value-of select="price"/>
      </div>
      <div style="background-color:skyblue;margin-left:10px;margin-bottom:1em;font-size:10pt">
        <p>
        <xsl:value-of select="description"/>
        <span style="font-style:bold"> (<xsl:value-of select="calories"/> calories per serving)</span>
        </p>
      </div>
    </xsl:for-each>
  </body>
</html>
