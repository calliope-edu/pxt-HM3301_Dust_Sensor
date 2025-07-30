You will find the English ReadMe at the end of the document.

# HM3301 Dust Sensor MakeCode Extension

Eine MakeCode-Erweiterung zur einfachen Nutzung des **HM3301 Feinstaubsensors** am Calliope mini.

---

## 🧩 Installation

Diese Erweiterung kann direkt in MakeCode hinzugefügt werden:

1. Öffne das MakeCode-Projekt ([MakeCode Editor](https://makecode.calliope.cc/)).
2. Klicke auf das Zahnrad ⚙️ → Erweiterungen.
3. Suche nach `https://github.com/calliope-edu/pxt-HM3301_Dust_Sensor` und wähle die Erweiterung aus.

---

## 🔌 Hardware-Anschluss

Der **HM3301** kommuniziert über den A0 Grove-Konnektors des Calliope mini (I2C).

| HM3301 Pin | Anschluss am Calliope mini   |
|------------|------------------------------|
| VIN        | 3.3V / 5V                    |
| GND        | GND                          |
| SDA        | SDA                          |
| SCL        | SCL                          |

---

## 🧪 Beispielcode (Blocks)

```blocks
basic.forever(function () {
    hm3301.updateData()
    serial.writeLine("PM1.0: " + hm3301.pm1() + " µg/m³")
    serial.writeLine("PM2.5: " + hm3301.pm25() + " µg/m³")
    serial.writeLine("PM10: " + hm3301.pm10() + " µg/m³")
    basic.pause(1000)
})
```



# HM3301 Dust Sensor MakeCode Extension

A MakeCode extension for easy integration of the **HM3301 dust sensor** with the Calliope mini.

---

## 🧩 Installation

This extension can be added directly in MakeCode:

1. Open your MakeCode project ([MakeCode Editor](https://makecode.calliope.cc/)).
2. Click the gear icon ⚙️ → Extensions.
3. Search for `https://github.com/calliope-edu/pxt-HM3301_Dust_Sensor` and select the extension.

---

## 🔌 Hardware Connection

The **HM3301** communicates via the A0 Grove connector on the Calliope mini using I2C.

| HM3301 Pin | Calliope mini Connection     |
|------------|------------------------------|
| VIN        | 3.3V / 5V                    |
| GND        | GND                          |
| SDA        | SDA                          |
| SCL        | SCL                          |

---

## 🧪 Example Code (Blocks)

```blocks
basic.forever(function () {
    hm3301.updateData()
    serial.writeLine("PM1.0: " + hm3301.pm1() + " µg/m³")
    serial.writeLine("PM2.5: " + hm3301.pm25() + " µg/m³")
    serial.writeLine("PM10: " + hm3301.pm10() + " µg/m³")
    basic.pause(1000)
})
```


## Supported targets

* pxt/calliopemini
  
## License

MIT
