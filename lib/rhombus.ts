`
  rhombus Shape coradinates
`

type zoneType = 1 | 2 | 3 | 4;

function simpleOrbitCordination(zone: zoneType, elem: HTMLElement) {
    console.clear();
    console.log("SOC Start!");
    console.time("soc");
    const height = Math.floor(elem.offsetHeight);
    const hStep = 1; // Math.floor(height / 12);
    const halfHeight = Math.floor(height / 2);
    const width = Math.floor(elem.offsetWidth);
    const wStep = 1; // Math.floor(width / 12);
    const halfWidth = Math.floor(width / 2);
    console.log(` height: ${height}, half height: ${halfHeight}`);
    console.log(` width: ${width}, half width: ${halfWidth}`);

    let top: number, right: number;
    zone = 1;
    top = halfHeight;
    right = 0;
    function getAllCordination(
        zone: zoneType,
        top: number,
        right: number,
        cordPack: Array<number[]> = []
    ) {
        cordPack.push([top, right, zone]);
        switch (zone) {
            case 1:
                if (top > 0 && right < halfWidth) {
                    top -= hStep;
                    right += wStep;
                    // cordPack.push([top, right, zone]);
                } else {
                    top = 0;
                    right = halfWidth;
                    zone = 2;
                }
                return getAllCordination(zone, top, right, cordPack);

            case 2:
                if (top < halfHeight && right < width) {
                    top += hStep;
                    right += wStep;
                    // cordPack.push([top, right, zone]);
                } else {
                    top = halfHeight;
                    right = width;
                    zone = 3;
                }
                return getAllCordination(zone, top, right, cordPack);

            case 3:
                if (top < height && right > halfWidth) {
                    top += hStep;
                    right -= wStep;
                    // cordPack.push([top, right, zone]);
                } else {
                    top = height;
                    right = halfWidth;
                    zone = 4;
                }
                return getAllCordination(zone, top, right, cordPack);

            case 4:
                if (top > halfHeight && right > 0) {
                    top -= hStep;
                    right -= wStep;
                    // cordPack.push([top, right, zone]);
                    return getAllCordination(zone, top, right, cordPack);
                } else {
                    // top = halfHeight;
                    // right = 0;
                    // zone = 1;
                    return cordPack;
                }
            default:
                zone = 1;
                top = halfHeight;
                right = 0;
                // cordPack.push([top, right, zone]);
                return getAllCordination(zone, top, right, cordPack);
        }
    }
    const allCord = getAllCordination(1, top, right);
    console.timeEnd("soc");
    console.log("result: ");
    console.log(allCord);
    return allCord;
}