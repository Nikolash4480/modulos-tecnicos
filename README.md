Piezas sueltas de estilo técnico: tipografía mono en mayúsculas, esquinas rectas, naranja y negro, marcas de registro, rayados y cifras gigantes. Sirve para láminas de manual, fichas descargables, informes monocromos y pantallas móviles de instrumentos. La app suave (redondeada, Geist sans) vive aparte, en **Módulos de App**.

## Cómo pedir una lámina

```
RailNav (items)                    ← capítulos, a la izquierda
TechTitle (eyebrow, lines)         ← título mono con regla bicolor
BigNumeral · SpecLabel · SpecTable ← cifras y metadatos
OffsetCard · BarcodeStrip          ← ficha y ornamento
```

- Los fondos son `paper`, `accent` o `night`; nunca blanco puro.
- Una sola zona naranja grande por lámina; el resto en tinta y gris.
- Todo cambia de tema con `data-theme`; las piezas `night` son siempre oscuras.

## Piezas disponibles

| Grupo | Piezas |
| --- | --- |
| Átomos | `Icon` |
| Navegación | `RailNav`, `BottomTabBar` |
| Listas | `CategoryRow` |
| Cifras e informe | `ProgressLine`, `ContentsRow`, `BigMetric`, `CompareRow`, `WarningBlock`, `SelectableBars` |
| Técnicas | `RegMark`, `HatchStripe`, `SlashMarks`, `BigNumeral`, `SpecLabel`, `SpecTable`, `TitleRule`, `CalloutDot`, `OffsetCard`, `BarcodeStrip`, `DotGrid`, `CodeTile`, `TechTitle`, `SpecimenGrid` |

## Recetas

1. **Manual:** `RailNav` + `TechTitle` + `SpecLabel` + `SpecTable`, con `BigNumeral` sobre un bloque naranja.
2. **Ficha descargable:** `OffsetCard` sobre `paper` con `RegMark` en las esquinas.
3. **Informe monocromo:** `BigMetric` + `CompareRow` + `ProgressLine` + `WarningBlock`.
4. **Índice:** `ContentsRow` repetida con `TitleRule` debajo del título.
5. **Móvil técnico:** `SelectableBars` + `BottomTabBar`.

## Fundamentos de contenido

- Etiquetas en mayúsculas mono, cortas; códigos tipo `ND-04`, `PX-04.1`.
- Los comentarios se marcan con `/*`; las unidades van pegadas a la cifra.
- Español técnico, sin adornos ni signos de exclamación.

## Fundamentos visuales

- **Forma:** `radius-none` en casi todo; círculo solo en `CalloutDot` y botones de acción.
- **Sombra:** una sola, dura y desplazada (`shadow-offset`), solo en `OffsetCard`.
- **Textura:** rayado diagonal (`hatch`), cuadrícula de puntos y marcas de registro; nunca degradados.
- **Tipografía:** `Geist Mono` para casi todo; `Geist` solo en cifras sueltas y muestrarios. `BigNumeral` en peso 700 con interlínea cerrada.
- **Contraste:** el texto sobre naranja es `on-accent` (oscuro); `ink-3` nunca sobre `surface-3`.

## Uso en código

Las piezas son componentes React expuestos en `window.TechKit`. Cada `README` documenta sus props, de modo que se puedan portar a Vue/Nuxt conservando nombres, props y clases `tk-*`.
