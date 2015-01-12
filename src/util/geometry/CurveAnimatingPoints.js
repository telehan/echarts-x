define(function (require) {

    var DynamicGeometry = require('qtek/DynamicGeometry');
    var Geometry = require('qtek/Geometry');
    var Attribute = Geometry.Attribute;

    var CurveAnimatingPoints = DynamicGeometry.derive(function () {
        return {
            attributes: {
                p0: new Attribute('p0', 'float', 3, '', true),
                p1: new Attribute('p1', 'float', 3, '', true),
                p2: new Attribute('p2', 'float', 3, '', true),
                p3: new Attribute('p3', 'float', 3, '', true),
                offset: new Attribute('offset', 'float', 1, '', true),
                size: new Attribute('size', 'float', 1, '', true),
                color: new Attribute('color', 'float', 4, 'COLOR', true)
            },
            mainAttribute: 'p0'
        }
    }, {
        clearPoints: function () {
            var attributes = this.attributes;
            attributes.p0.value.length = 0;
            attributes.p1.value.length = 0;
            attributes.p2.value.length = 0;
            attributes.p3.value.length = 0;
            attributes.offset.value.length = 0;
            attributes.size.value.length = 0;
            attributes.color.value.length = 0;
        },

        addPoint: function (p0, p1, p2, p3, color) {
            var attributes = this.attributes;
            var offset = Math.random();
            for (var i = 0; i < 15; i++) {
                attributes.p0.value.push(p0._array);
                attributes.p1.value.push(p1._array);
                attributes.p2.value.push(p2._array);
                attributes.p3.value.push(p3._array);
                attributes.offset.value.push(offset);
                attributes.size.value.push(i / 15);
                attributes.color.value.push(color);
                offset += 0.004;
            }
        }
    });

    return CurveAnimatingPoints;
});