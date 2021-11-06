import { DbIconDefinition, DbIconName, DbIconProps, DbIconStyle, DbPathDefinition, DbSvgDefinition } from "@digibearapp/digibear-common-types";

export class DigibearIconsRegistry {
    private registry: Map<DbIconName, DbIconDefinition>;
    constructor() { this.registry = new Map<DbIconName, DbIconDefinition>(); }

    public registerIcons(icons: DbIconDefinition[]): void {
        icons.forEach((icon: DbIconDefinition) => this.registry.set(icon.iconName, icon));
    }

    public getIcon(dbIconProps: DbIconProps): DbSvgDefinition | undefined {
        const iconName = dbIconProps.iconName;
        if (!this.registry.has(iconName)) {
            console.warn(`The icon ${iconName} could not be found, did you add it to DigibearIconsRegistry ?`);
        }
        const dbIconDefinition = this.registry.get(iconName)!;
        return this.buildSvgFromDbIcon(dbIconDefinition, dbIconProps);
    }

    private computeTransform(flippedH?: boolean, flippedV?: boolean) {
        const translationH = flippedH ? 24 : 0;
        const translationV = flippedV ? 24 : 0;
        const scaleH = flippedH ? -1 : 1;
        const scaleV = flippedV ? -1 : 1;
        return `translate(${translationH},${translationV}) scale(${scaleH},${scaleV})`;
    }

    private buildSvgPaths(pathsData: string[], iconProps: DbIconProps, isMulticolor: boolean) {
        return pathsData.map(function (pathData, i) {
            let color = iconProps.color;
            let opacity = iconProps.opacity;
            if (pathsData.length > 1 && i == 0) {
                if (isMulticolor) {
                    color = iconProps.secondaryColor;
                    opacity = iconProps.secondaryOpacity;
                }
            }
            const path: DbPathDefinition = {
                d: pathData,
                fill: color!,
                opacity: opacity!
            }
            return path;
        });
    }

    private isMulticolor(iconStyle: DbIconStyle) : boolean{
        return iconStyle === "duotone";
    }

    private buildSvgFromDbIcon(iconDefinition: DbIconDefinition, iconProps: DbIconProps) {
        const iconSize = iconProps.size!;
        const iconColor = iconProps.color!;
        const iconStyle = iconProps.iconStyle!;
        const svgPathData = iconDefinition.svgPathData[iconStyle]!;
        const flippedH = iconProps.flippedH!;
        const flippedV = iconProps.flippedV!;
        const isMulticolor = this.isMulticolor(iconStyle);
        const computedTransform = this.computeTransform(flippedH, flippedV)!;
        const paths = this.buildSvgPaths(svgPathData, iconProps, isMulticolor);

        const svgDef: DbSvgDefinition = {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: iconSize,
            height: iconSize,
            fill: iconColor,
            groupTransform: computedTransform,
            paths: paths
        };

        return svgDef;
    }
}