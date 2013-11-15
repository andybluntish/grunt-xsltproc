<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" omit-xml-declaration="yes" encoding="utf-8" indent="yes" media-type="text/html" />

  <xsl:param name="title" select="/catalogue/@title" />
  <xsl:param name="fav" />

  <xsl:template match="/catalogue">
    <html>
    <head>
      <title><xsl:value-of select="$title" /></title>
    </head>
    <body>
      <header role="banner">
        <h1><xsl:value-of select="$title" /></h1>
        <xsl:if test="$fav">
          <p>My current favourite is "<xsl:value-of select="$fav" />"</p>
        </xsl:if>
      </header>
      <div role="main">
        <ul class="albums">
          <xsl:apply-templates select="./album"/>
        </ul>
      </div>
    </body>
    </html>
  </xsl:template>

  <xsl:template match="album">
    <li class="album">
      <h2><xsl:value-of select="./artist" /></h2>
      <p><a href="{./link}"><xsl:value-of select="./title" /> (<xsl:value-of select="./year" />)</a></p>
      <xsl:apply-templates select="tracks" />
    </li>
  </xsl:template>

  <xsl:template match="tracks">
    <ol class="tracks">
      <xsl:apply-templates />
    </ol>
  </xsl:template>

  <xsl:template match="track">
    <li><xsl:value-of select="." /> (<xsl:value-of select="@length" />)</li>
  </xsl:template>

</xsl:stylesheet>
