define(function (require) {
    
    var DynamicGeometry = require('qtek/DynamicGeometry');
    var Geometry = require('qtek/Geometry');

    var PointsGeometry = DynamicGeometry.derive(function () {
        return {
            attributes: {
                position: new Geometry.Attribute('position', 'float', 3, 'POSITION', true),
                size: new Geometry.Attribute('size', 'float', 1, '', true),
                color: new Geometry.Attribute('color', 'float', 4, 'COLOR', true)
            }
        }
    }, {

        clearPoints: function () {
            var attributes = this.attributes;
            attributes.position.value.length = 0;
            attributes.color.value.length = 0;
            attributes.size.value.length = 0;
        },

        addPoint: function (position, color, size) {
            var attributes = this.attributes;

            attributes.position.value.push(position._array);
            attributes.color.value.push(color);
            attributes.size.value.push(size);
        }
    });

    return PointsGeometry;
});