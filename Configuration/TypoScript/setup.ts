plugin.tx_rollovercollection4_rollovereffect4 {
  view {
    #templateRootPaths = EXT:rollovercollection4/Resources/Private/Templates/
    templateRootPaths = {$plugin.tx_rollovercollection4_rollovereffect4.view.templateRootPath}

    #partialRootPaths = EXT:rollovercollection4/Resources/Private/Partials/
    partialRootPaths = {$plugin.tx_rollovercollection4_rollovereffect4.view.partialRootPath}

    #layoutRootPaths = EXT:rollovercollection4/Resources/Private/Layouts/
    layoutRootPaths = {$plugin.tx_rollovercollection4_rollovereffect4.view.layoutRootPath}
  
}
  persistence {
    storagePid = {$plugin.tx_rollovercollection4_rollovereffect4.persistence.storagePid}
    #recursive = 1
  }
  features {
    #skipDefaultArguments = 1
  }
  mvc {
    #callDefaultActionIfActionCantBeResolved = 1
  }
}


# button labels
lib.rollovercollection4.label.readMore = TEXT
lib.rollovercollection4.label.readMore {
  value =READ MORE
  lang.it= DETTAGLI
}

#
# bootstrap, add alternative and dynamic templates 
#
# for image, textmedia and media

tt_content.image.partialRootPaths.2850 >
tt_content.image.partialRootPaths {
         2850 = EXT:rollovercollection4/Resources/Private/Partials/ContentElementsv12/
         2850.stdWrap.if {
                value =   2851,2852,2853,2854,2855,2856,2857,2858,2859,2860
                isInList.field = layout
         }
}

tt_content.textpic.partialRootPaths.2850 >
tt_content.textpic.partialRootPaths {
         2850 = EXT:rollovercollection4/Resources/Private/Partials/ContentElementsv12/
         2850.stdWrap.if {
                value =   2851,2852,2853,2854,2855,2856,2857,2858,2859,2860
                isInList.field = layout
         }
}

tt_content.media.partialRootPaths.2850 >
tt_content.media.partialRootPaths {
         2850 = EXT:rollovercollection4/Resources/Private/Partials/ContentElementsv12/
         2850.stdWrap.if {
                value =   2851,2852,2853,2854,2855,2856,2857,2858,2859,2860
                isInList.field = layout
         }
}

tt_content.textmedia.partialRootPaths.2850 >
tt_content.textmedia.partialRootPaths {
         2850 = EXT:rollovercollection4/Resources/Private/Partials/ContentElementsv12/
         2850.stdWrap.if {
                value =   2851,2852,2853,2854,2855,2856,2857,2858,2859,2860
                isInList.field = layout
         }
}



# SCSS inclusion
page.includeCSS {
      rollovercollection4 = {$plugin.tx_rollovercollection4_rollovereffect4.view.scssPath}theme.scss
}

# tt_content settings for raw data output // title
tt_content.image.settings.R4titleRawdataOutput = {$plugin.tx_rollovercollection4_rollovereffect4.settings.titleRawdataOutput}
tt_content.textpic.settings.R4titleRawdataOutput = {$plugin.tx_rollovercollection4_rollovereffect4.settings.titleRawdataOutput}
tt_content.media.settings.R4titleRawdataOutput = {$plugin.tx_rollovercollection4_rollovereffect4.settings.titleRawdataOutput}
tt_content.textmedia.settings.R4titleRawdataOutput = {$plugin.tx_rollovercollection4_rollovereffect4.settings.titleRawdataOutput}

# tt_content settings for raw data output // caption
tt_content.image.settings.R4captionRawdataOutput = {$plugin.tx_rollovercollection4_rollovereffect4.settings.captionRawdataOutput}
tt_content.textpic.settings.R4captionRawdataOutput = {$plugin.tx_rollovercollection4_rollovereffect4.settings.captionRawdataOutput}
tt_content.media.settings.R4captionRawdataOutput = {$plugin.tx_rollovercollection4_rollovereffect4.settings.captionRawdataOutput}
tt_content.textmedia.settings.R4captionRawdataOutput = {$plugin.tx_rollovercollection4_rollovereffect4.settings.captionRawdataOutput}

