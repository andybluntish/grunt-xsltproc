<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" omit-xml-declaration="yes" encoding="utf-8" indent="yes" media-type="text/html" />

  <xsl:template match="/catalogue">
    <html>
    <head>
      <title><xsl:value-of select="@title" /></title>
    </head>
    <body>
      <h1><xsl:value-of select="@title" /></h1>
      <ul class="albums">
        <xsl:apply-templates select="./album" />
      </ul>
    </body>
    </html>
  </xsl:template>

  <xsl:template match="album">
    <li class="album">
      <xsl:apply-templates select="./artist" />
      <xsl:text> - </xsl:text>
      <xsl:apply-templates select="./title" />
    </li>
  </xsl:template>
</xsl:stylesheet>
