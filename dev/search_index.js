var documenterSearchIndex = {"docs":
[{"location":"#GeoFormatTypes.jl-1","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.jl","text":"","category":"section"},{"location":"#","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.jl","text":"Modules = [GeoFormatTypes]","category":"page"},{"location":"#GeoFormatTypes.GeoFormatTypes","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.GeoFormatTypes","text":"GeoFormatTypes\n\n(Image: Stable) (Image: Dev) (Image: Build Status)\n\nGeographic data and metadata often has multiple formats that can represent the same informations, such as Well Known Text, Proj4 strings, EPSG codes, GeoJSON or KML. This data may be in the form of strings, integer codes, or dictionaries. GeoFormatTypes defines wrapper types to make it easy to pass these formats between packages while keeping information about what format is contained, instead of passing a String or Int that could be from any type.\n\nThis allows the use of base methods such as convert to work with data in multiple formats, instead of long lists of format specific handling methods.\n\n\n\n\n\n","category":"module"},{"location":"#GeoFormatTypes.AbstractWellKnownText","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.AbstractWellKnownText","text":"Well known text has a number of versions and standards, and can  represent coordinate reference systems or geometric data.\n\n\n\n\n\n","category":"type"},{"location":"#GeoFormatTypes.CoordinateReferenceSystemFormat","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.CoordinateReferenceSystemFormat","text":"Formats representing coordinate reference systems\n\n\n\n\n\n","category":"type"},{"location":"#GeoFormatTypes.EPSG","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.EPSG","text":"EPSG code representing a coordinate reference system from the  EPSG spatial reference system registry.\n\n\n\n\n\n","category":"type"},{"location":"#GeoFormatTypes.EPSG-Tuple{AbstractString}","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.EPSG","text":"Constructor for \"EPSG:1234\" string input\n\n\n\n\n\n","category":"method"},{"location":"#GeoFormatTypes.ESRIWellKnownText","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.ESRIWellKnownText","text":"Well known text following the ESRI standard\n\n\n\n\n\n","category":"type"},{"location":"#GeoFormatTypes.GML","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.GML","text":"Geography Markup Language\n\n\n\n\n\n","category":"type"},{"location":"#GeoFormatTypes.GeoFormat","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.GeoFormat","text":"Abstract supertype for geospatial data formats\n\n\n\n\n\n","category":"type"},{"location":"#GeoFormatTypes.GeoJSON","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.GeoJSON","text":"GeoJSON String or Dict\n\n\n\n\n\n","category":"type"},{"location":"#GeoFormatTypes.KML","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.KML","text":"Keyhole Markup Language\n\n\n\n\n\n","category":"type"},{"location":"#GeoFormatTypes.MixedFormat","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.MixedFormat","text":"Formats that may hold either or both coordinate reference systems and geometries.\n\n\n\n\n\n","category":"type"},{"location":"#GeoFormatTypes.ProjString","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.ProjString","text":"Proj string\n\n\n\n\n\n","category":"type"},{"location":"#GeoFormatTypes.WellKnownBinary","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.WellKnownBinary","text":"Well known binary\n\n\n\n\n\n","category":"type"},{"location":"#GeoFormatTypes.WellKnownText","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.WellKnownText","text":"Well known text v1 following the OGC standard\n\n\n\n\n\n","category":"type"},{"location":"#GeoFormatTypes.WellKnownText2","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.WellKnownText2","text":"Well known text v2 following the new OGC standard\n\n\n\n\n\n","category":"type"},{"location":"#GeoFormatTypes.GeometryFormat","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.GeometryFormat","text":"Formats representing geometries. These wrappers simply mark string formats that may optionally be converted to Geoetry objects at a later point.\n\n\n\n\n\n","category":"type"},{"location":"#GeoFormatTypes.val","page":"GeoFormatTypes.jl","title":"GeoFormatTypes.val","text":"val(f::GeoFormat)\n\nGet the contained value of a GeoFormat type.\n\n\n\n\n\n","category":"function"}]
}
