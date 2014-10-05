<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" omit-xml-declaration="yes" encoding="utf-8" indent="yes" media-type="text/html" />

  <xsl:param name="filepath" />

  <xsl:template match="/catalogue">
    <html>
    <head>
      <title><xsl:value-of select="@title" /></title>
    </head>
    <body>
      <p>The current filepath is: "<xsl:value-of select="$filepath" />"</p>
    </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
