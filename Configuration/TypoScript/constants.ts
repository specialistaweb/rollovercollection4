# customsubcategory=100=Image Partial Template path#


plugin.tx_rollovercollection4_rollovereffect4 {
  view {
    # cat=plugin.tx_rollovercollection4_rollovereffect4/file; type=string; label=Path to template root (FE)
    templateRootPath = EXT:rollovercollection4/Resources/Private/Templates/
    # cat=plugin.tx_rollovercollection4_rollovereffect4/file; type=string; label=Path to template partials (FE)
    partialRootPath = EXT:rollovercollection4/Resources/Private/Partials/
    # cat=plugin.tx_rollovercollection4_rollovereffect4/file; type=string; label=Path to template layouts (FE)
    layoutRootPath = EXT:rollovercollection4/Resources/Private/Layouts/

    # cat=plugin.tx_rollovercollection4_rollovereffect4/file; type=string; label=Path to template SCSS folder
    scssPath = EXT:rollovercollection4/Resources/Public/Scss/Theme/
  }
  persistence {
    # cat=plugin.tx_rollovercollection4_rollovereffect4//a; type=string; label=Default storage PID
    #storagePid =
  }

  settings {

    # cat=plugin.tx_rollovercollection4_rollovereffect4/settings; type=boolean; label= Title raw data output / warning, possible security break!
    titleRawdataOutput = 0
    
    # cat=plugin.tx_rollovercollection4_rollovereffect4/settings; type=boolean; label= Caption raw data output / warning, possible security break!
    captionRawdataOutput = 1

  }
}


#####################
### SCSS SETTINGS ###
#####################

# customsubcategory=common=Common settings
# customsubcategory=tergeste=Tergeste style settings
# customsubcategory=furio=Furio style settings
# customsubcategory=uccio=Uccio style settings
# customsubcategory=ettore=Ettore style settings
# customsubcategory=selma=Selma style settings
# customsubcategory=mariucci=Mariucci style settings
# customsubcategory=nevio=Nevio style settings

plugin.bootstrap_package {
    settings {
          scss {
            
          # cat=bootstrap package: rollovercollection4-blocks/common/080; type=string; label=$rollover4-brand-primary: base color
          rollover4-brand-primary =  $brand-primary
          
          # cat=bootstrap package: rollovercollection4-blocks/tergeste/089; type=string; label=$rollover4-tergeste-maxBlockWidth: max block width (px or %)
          rollover4-tergeste-maxBlockWidth = 100%        
            
          # cat=bootstrap package: rollovercollection4-blocks/tergeste/090; type=string; label=$rollover4-tergeste-titleColor: title color
          rollover4-tergeste-titleColor = white

          # cat=bootstrap package: rollovercollection4-blocks/tergeste/091; type=string; label=$rollover4-tergeste-titleSize: title font size
          rollover4-tergeste-titleSize= 18px
          
          # cat=bootstrap package: rollovercollection4-blocks/tergeste/092; type=string; label=$rollover4-tergeste-titleWeight: title weight
          rollover4-tergeste-titleWeight = 700
          
          # cat=bootstrap package: rollovercollection4-blocks/tergeste/093; type=string; label=$rollover4-tergeste-titleBgColor: title background color
          rollover4-tergeste-titleBgColor = #2fbde4
            
          # cat=bootstrap package: rollovercollection4-blocks/tergeste/094; type=string; label=$rollover4-tergeste-captionSize: caption font size
          rollover4-tergeste-captionSize = 16px
            
          # cat=bootstrap package: rollovercollection4-blocks/tergeste/095; type=string; label=$rollover4-tergeste-captionColor: caption color
          rollover4-tergeste-captionColor = #666

          # cat=bootstrap package: rollovercollection4-blocks/tergeste/096; type=string; label=$rollover4-tergeste-buttonTextColor: button text color
          rollover4-tergeste-buttonTextColor = white
 
           # cat=bootstrap package: rollovercollection4-blocks/tergeste/097; type=string; label=$rollover4-tergeste-buttonTextSize: button text size
          rollover4-tergeste-buttonTextSize = 14px
            
          # cat=bootstrap package: rollovercollection4-blocks/tergeste/098; type=string; label=$rollover4-tergeste-buttonBgColor: button background color
          rollover4-tergeste-buttonBgColor = #005091 
          
          # cat=bootstrap package: rollovercollection4-blocks/tergeste/099; type=string; label=$rollover4-tergeste-buttonBgROColor: button background rollover color
          rollover4-tergeste-buttonBgROColor = $rollover4-tergeste-titleBgColor 

          # cat=bootstrap package: rollovercollection4-blocks/tergeste/100; type=string; label=$rollover4-tergeste-imageSize: substitute with 'unset' to disable animation
          rollover4-tergeste-imageSize = 100% 
            
          # cat=bootstrap package: rollovercollection4-blocks/tergeste/101; type=string; label=$rollover4-tergeste-imageROSize: keep empty to disable animation
          rollover4-tergeste-imageROSize =  

    

          # cat=bootstrap package: rollovercollection4-blocks/furio/119; type=string; label=$rollover4-furio-maxBlockWidth: max block width (px or %)
          rollover4-furio-maxBlockWidth = 100% 
            
          # cat=bootstrap package: rollovercollection4-blocks/furio/120; type=string; label=$rollover4-furio-titleColor: title color
          rollover4-furio-titleColor =  white 

          # cat=bootstrap package: rollovercollection4-blocks/furio/121; type=string; label=$rollover4-furio-titleSize: title font size
          rollover4-furio-titleSize = 18px
          
          # cat=bootstrap package: rollovercollection4-blocks/furio/122; type=string; label=$rollover4-furio-titleWeight: title weight
          rollover4-furio-titleWeight = 700
          
          # cat=bootstrap package: rollovercollection4-blocks/furio/123; type=string; label=$rollover4-furio-titleBgColor: title background color
          rollover4-furio-titleBgColor = transparent
            
          # cat=bootstrap package: rollovercollection4-blocks/furio/124; type=string; label=$rollover4-furio-captionSize: caption font size
          rollover4-furio-captionSize = 14px
            
          # cat=bootstrap package: rollovercollection4-blocks/furio/125; type=string; label=$rollover4-furio-captionColor: caption color
          rollover4-furio-captionColor = #666
            
          # cat=bootstrap package: rollovercollection4-blocks/furio/126; type=string; label=$rollover4-furio-captionColor: border properties
          rollover4-furio-border = 4px solid $rollover4-furio-titleColor

          # cat=bootstrap package: rollovercollection4-blocks/furio/127; type=string; label=$rollover4-furio-maskBgColor: mask background color
          rollover4-furio-maskBgColor =  rgba(0,80,145, 0.7)      
            
          # cat=bootstrap package: rollovercollection4-blocks/furio/128; type=string; label=$rollover4-furio-maskBgROColor: mask background rollover color
          rollover4-furio-maskBgROColor = rgba(0,80,145, 0)  
 

          # cat=bootstrap package: rollovercollection4-blocks/uccio/129; type=string; label=$rollover4-uccio-maxBlockWidth: max block width (px or %)
          rollover4-uccio-maxBlockWidth = 100% 
          
          # cat=bootstrap package: rollovercollection4-blocks/uccio/130; type=string; label=$rollover4-uccio-titleColor: title color
          rollover4-uccio-titleColor =  white

          # cat=bootstrap package: rollovercollection4-blocks/uccio/131; type=string; label=$rollover4-uccio-titleSize: title font size
          rollover4-uccio-titleSize = 24px
          
          # cat=bootstrap package: rollovercollection4-blocks/uccio/132; type=string; label=$rollover4-uccio-titleWeight: title weight
          rollover4-uccio-titleWeight = 700
          
          # cat=bootstrap package: rollovercollection4-blocks/uccio/133; type=string; label=$rollover4-uccio-titleBgColor: title background color
          rollover4-uccio-titleBgColor = transparent
            
          # cat=bootstrap package: rollovercollection4-blocks/uccio/134; type=string; label=$rollover4-uccio-captionSize: caption font size
          rollover4-uccio-captionSize = 14px
            
          # cat=bootstrap package: rollovercollection4-blocks/uccio/135; type=string; label=$rollover4-uccio-captionColor: caption color
          rollover4-uccio-captionColor = #666
            
          # cat=bootstrap package: rollovercollection4-blocks/uccio/136; type=string; label=$rollover4-uccio-border: border properties
          rollover4-uccio-border = 4px solid $rollover4-uccio-titleColor

          # cat=bootstrap package: rollovercollection4-blocks/uccio/137; type=string; label=$rollover4-uccio-maskBgColor: mask background color
          rollover4-uccio-maskBgColor =   rgba(0,80,145, 0) 
            
          # cat=bootstrap package: rollovercollection4-blocks/uccio/138; type=string; label=$rollover4-uccio-maskBgROColor: mask background rollover color
          rollover4-uccio-maskBgROColor =  rgba(0,80,145, 0.7)   

            
            
          # cat=bootstrap package: rollovercollection4-blocks/ettore/140; type=string; label=$rollover4-ettore-maxBlockWidth: max block width (px or %)
          rollover4-ettore-maxBlockWidth = 100%
            
          # cat=bootstrap package: rollovercollection4-blocks/ettore/141; type=string; label=$rollover4-ettore-titleColor: title color
          rollover4-ettore-titleColor =  #2fbde4

          # cat=bootstrap package: rollovercollection4-blocks/ettore/142; type=string; label=$rollover4-ettore-titleSize: title font size
          rollover4-ettore-titleSize = 32px
          
          # cat=bootstrap package: rollovercollection4-blocks/ettore/143; type=string; label=$rollover4-ettore-titleWeight: title weight
          rollover4-ettore-titleWeight = 700
            
          # cat=bootstrap package: rollovercollection4-blocks/ettore/144; type=string; label=$rollover4-ettore-captionSize: caption font size
          rollover4-ettore-captionSize = 14px
            
          # cat=bootstrap package: rollovercollection4-blocks/ettore/145; type=string; label=$rollover4-ettore-captionColor: caption color
          rollover4-ettore-captionColor = #666
            
          # cat=bootstrap package: rollovercollection4-blocks/ettore/146; type=string; label=$rollover4-ettore-iconSize: icon size px or percent, used for width and heightproperties
          rollover4-ettore-iconSize = 30%
            
          # cat=bootstrap package: rollovercollection4-blocks/ettore/147; type=string; label=$rollover4-ettore-color1: color1
          rollover4-ettore-color1 = #2fbde4
           
          # cat=bootstrap package: rollovercollection4-blocks/ettore/148; type=string; label=$rollover4-ettore-color2: color2
          rollover4-ettore-color2 = #005091
            
          # cat=bootstrap package: rollovercollection4-blocks/ettore/149; type=string; label=$rollover4-ettore-blockBorder: block border
          rollover4-ettore-blockBorder = 1px solid #ddd

          # cat=bootstrap package: rollovercollection4-blocks/ettore/150; type=string; label=$rollover4-ettore-imageBorder: image border
          rollover4-ettore-imageBorder = 8px solid $rollover4-ettore-color1
            
          # cat=bootstrap package: rollovercollection4-blocks/ettore/151; type=string; label=$rollover4-ettore-imageROBorder: image rollover border
          rollover4-ettore-imageROBorder = 8px solid white 

          # cat=bootstrap package: rollovercollection4-blocks/ettore/152; type=string; label=$rollover4-ettore-gradient: gradient properties
          rollover4-ettore-gradient =   rgba(0, 0, 0, 0) linear-gradient(to bottom, $rollover4-ettore-color1 0%,  $rollover4-ettore-color2 100%) repeat scroll 0 0
 
            

          # cat=bootstrap package: rollovercollection4-blocks/selma/169; type=string; label=$rollover4-selma-maxBlockWidth: max block width (px or %)
          rollover4-selma-maxBlockWidth = 100%
 
           # cat=bootstrap package: rollovercollection4-blocks/selma/170; type=string; label=$rollover4-selma-titleColor: title color
          rollover4-selma-titleColor = orange

          # cat=bootstrap package: rollovercollection4-blocks/selma/171; type=string; label=$rollover4-selma-titleSize: title font size
          rollover4-selma-titleSize = 28px
          
          # cat=bootstrap package: rollovercollection4-blocks/selma/172; type=string; label=$rollover4-selma-titleWeight: title weight
          rollover4-selma-titleWeight = 700
                 
          # cat=bootstrap package: rollovercollection4-blocks/selma/173; type=string; label=$rollover4-selma-captionSize: caption font size
          rollover4-selma-captionSize = 16px
            
          # cat=bootstrap package: rollovercollection4-blocks/selma/174; type=string; label=$rollover4-selma-captionColor: caption color
          rollover4-selma-captionColor = #666
        
          # cat=bootstrap package: rollovercollection4-blocks/selma/175; type=string; label=$rollover4-selma-linkColor: link color
          rollover4-selma-linkColor = white
            
          # cat=bootstrap package: rollovercollection4-blocks/selma/176; type=string; label=$rollover4-selma-linkROColor: link rollover color
          rollover4-selma-linkROColor = black
            
          # cat=bootstrap package: rollovercollection4-blocks/selma/177; type=string; label=$rollover4-selma-linkSize: link font size
          rollover4-selma-linkSize = 12px
            
          # cat=bootstrap package: rollovercollection4-blocks/selma/178; type=string; label=$rollover4-selma-linkWeight: link font weight
          rollover4-selma-linkWeight = 700
      
          # cat=bootstrap package: rollovercollection4-blocks/selma/179; type=string; label=$rollover4-selma-linkBgColor: link background color
          rollover4-selma-linkBgColor = orange

          # cat=bootstrap package: rollovercollection4-blocks/selma/180; type=string; label=$rollover4-selma-imageSize: substitute with 'unset' to disable animation
          rollover4-selma-imageSize = 500px
            
          # cat=bootstrap package: rollovercollection4-blocks/selma/181; type=string; label=$rollover4-selma-imageROSize: keep empty to disable animation
          rollover4-selma-imageROSize =  460px
       
                
        
          # cat=bootstrap package: rollovercollection4-blocks/mariucci/199; type=string; label=$rollover4-mariucci-maxBlockWidth: max block width (px or %)
          rollover4-mariucci-maxBlockWidth = 100%
            
          # cat=bootstrap package: rollovercollection4-blocks/mariucci/200; type=string; label=$rollover4-mariucci-altBgColor: first block background color
          rollover4-mariucci-altBgColor = #6ddce3 

          # cat=bootstrap package: rollovercollection4-blocks/mariucci/201; type=string; label=$rollover4-mariucci-altTextColor: first block text color
          rollover4-mariucci-altTextColor = white       
            
          # cat=bootstrap package: rollovercollection4-blocks/mariucci/202; type=string; label=$rollover4-mariucci-titleColor: title color
          rollover4-mariucci-titleColor = black
            
          # cat=bootstrap package: rollovercollection4-blocks/mariucci/203; type=string; label=$rollover4-mariucci-titleBgColor: title background color
          rollover4-mariucci-titleBgColor = #00a2ad

            # cat=bootstrap package: rollovercollection4-blocks/mariucci/204; type=string; label=$rollover4-mariucci-titleSize: title font size
          rollover4-mariucci-titleSize = 24px
          
          # cat=bootstrap package: rollovercollection4-blocks/mariucci/205; type=string; label=$rollover4-mariucci-titleWeight: title weight
          rollover4-mariucci-titleWeight = 700
                 
          # cat=bootstrap package: rollovercollection4-blocks/mariucci/206; type=string; label=$rollover4-mariucci-captionSize: caption font size
          rollover4-mariucci-captionSize = 16px
            
          # cat=bootstrap package: rollovercollection4-blocks/mariucci/207; type=string; label=$rollover4-mariucci-captionColor: caption color
          rollover4-mariucci-captionColor = #666
        
          # cat=bootstrap package: rollovercollection4-blocks/mariucci/208; type=string; label=$rollover4-mariucci-linkColor1: button color1
          rollover4-mariucci-linkColor1 = white
            
          # cat=bootstrap package: rollovercollection4-blocks/mariucci/209; type=string; label=$rollover4-mariucci-linkColor2: button color2
          rollover4-mariucci-linkColor2 = #00a2ad
            
          # cat=bootstrap package: rollovercollection4-blocks/mariucci/210; type=string; label=$rollover4-mariucci-linkSize: button font size
          rollover4-mariucci-linkSize = 16px
            
          # cat=bootstrap package: rollovercollection4-blocks/mariucci/211; type=string; label=$rollover4-mariucci-linkWeight: button font weight
          rollover4-mariucci-linkWeight = 700

          # cat=bootstrap package: rollovercollection4-blocks/mariucci/212; type=string; label=$rollover4-mariucci-imageSize: icon circle image (for width and height)
          rollover4-mariucci-imageSize = 100px    


            
          # cat=bootstrap package: rollovercollection4-blocks/nevio/230; type=string; label=$rollover4-nevio-maxBlockWidth: max block width (px or %)
          rollover4-nevio-maxBlockWidth = 100%
            
          # cat=bootstrap package: rollovercollection4-blocks/nevio/235; type=string; label=$rollover4-nevio-blockPadding: whole block padding
          rollover4-nevio-blockPadding = 6px
            
          # cat=bootstrap package: rollovercollection4-blocks/nevio/236; type=string; label=$rollover4-nevio-blockBorder : block border size and color
          rollover4-nevio-blockBorder = 1px solid #005091
            
          # cat=bootstrap package: rollovercollection4-blocks/nevio/237; type=string; label=$rollover4-nevio-blockBorderRadius : block radius
          rollover4-nevio-blockBorderRadius = 8px
            
          # cat=bootstrap package: rollovercollection4-blocks/nevio/238; type=string; label=$rollover4-nevio-blockBgColor : block background color
          rollover4-nevio-blockBgColor = $primary
           
          # cat=bootstrap package: rollovercollection4-blocks/nevio/239; type=string; label=$rollover4-nevio-blockBgColor : block hover background color
          rollover4-nevio-blockBgROColor =  lighten($primary,8)
            
          # cat=bootstrap package: rollovercollection4-blocks/nevio/239; type=string; label=$rollover4-nevio-textColor : text color applied to P tag
          rollover4-nevio-textColor = white

          # cat=bootstrap package: rollovercollection4-blocks/nevio/240; type=string; label=$rollover4-nevio-allROColor : text inside block, color when hover
          rollover4-nevio-allROColor = white
            
          # cat=bootstrap package: rollovercollection4-blocks/nevio/241; type=string; label=$rollover4-nevio-blockMarginBottom : margin bottom to separate the items
          rollover4-nevio-blockMarginBottom = 12px
            
          # cat=bootstrap package: rollovercollection4-blocks/nevio/242; type=string; label=$rollover4-nevio-titleColor: title color
          rollover4-nevio-titleColor =  #005091

          # cat=bootstrap package: rollovercollection4-blocks/nevio/243; type=string; label=$rollover4-nevio-titleSize: title font size
          rollover4-nevio-titleSize = 16px
          
          # cat=bootstrap package: rollovercollection4-blocks/nevio/244; type=string; label=$rollover4-nevio-titleWeight: title weight
          rollover4-nevio-titleWeight = 500
            
          # cat=bootstrap package: rollovercollection4-blocks/nevio/245; type=string; label=$rollover4-nevio-imageSize: icon size, for height (width: auto)
          rollover4-nevio-imageSize = 60px
            
          # cat=bootstrap package: rollovercollection4-blocks/nevio/246; type=string; label=$rollover4-nevio-imageBorder: image border
          rollover4-nevio-imageBorder = 4px solid white
            
           # cat=bootstrap package: rollovercollection4-blocks/nevio/247; type=string; label=$rollover4-nevio-imageBorderRadius: image border radius (ie. 50%, 0%, 20%)
          rollover4-nevio-imageBorderRadius = 50%
            
      
      }
    }
}


