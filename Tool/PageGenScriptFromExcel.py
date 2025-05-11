import tkinter as tk
from tkinter import filedialog
from Page import *
import pandas as pd
import json
from Script import *


class PageGenScriptFromExcel(Page):
    LISTOPTION = ["Review", "TuVung", "KanjiV2", "Review2", "Review3"]

    def __init__(self, *args, **kwargs):
        Page.__init__(self, *args, **kwargs)

        self.labelProgramFile = tk.LabelFrame(self, text="Program file")
        self.labelProgramFile.grid(row=0, column=0, padx=10, pady=10, ipadx=2, ipady=2)

        self.entry = tk.Entry(self.labelProgramFile, width=60)
        self.entry.grid(row=0, column=0, pady=5, padx=5)

        self.btnBrowse = tk.Button(
            self.labelProgramFile,
            text="Browse...",
            width=13,
            height=1,
            command=self.openFile,
        )
        self.btnBrowse.grid(row=0, column=1)

        self.btnStart = tk.Button(
            self.labelProgramFile,
            text="Start",
            font=("calibre", 15, "bold"),
            width=30,
            height=1,
            command=self.parseFile,
        )
        self.btnStart.grid(row=1, column=0)

        self.clicked = tk.StringVar()
        self.clicked.set(self.LISTOPTION[0])

        self.optGen = tk.OptionMenu(
            self.labelProgramFile, self.clicked, *self.LISTOPTION
        )
        self.optGen.config(width=10)
        self.optGen.grid(row=1, column=1, sticky="n")

        self.labelProgramLog = tk.LabelFrame(self, text="Log")
        self.labelProgramLog.grid(row=1, column=0, ipadx=2, ipady=2)

        self.logText = tk.Text(
            self.labelProgramLog, width=59, height=10, state="normal"
        )
        self.logText.grid(row=0, column=0, columnspan=3, padx=5, pady=5)
        self.logText.tag_configure(
            "green_text", foreground="green", font=("calibre", 11, "bold")
        )
        self.logText.tag_configure(
            "red_text", foreground="red", font=("calibre", 11, "bold")
        )

        self.btnClear = tk.Button(
            self.labelProgramLog,
            text="Clear",
            font=("calibre", 10),
            width=6,
            command=self.clearLog,
        )
        self.btnClear.grid(row=1, column=0, sticky="w", padx=3)

    def openFile(self):
        filePath = filedialog.askopenfilename(
            title="Choose file", filetypes=(("Excel", "*.xlsx"),)
        )
        if filePath:
            self.entry.delete(0, tk.END)
            self.entry.insert(0, filePath)
        else:
            self.logText.insert(tk.END, "No file selected!!!\n", "red_text")

    def clearLog(self):
        self.logText.delete("1.0", tk.END)

    def parseFile(self):
        pathFile = self.entry.get()
        if pathFile:
            self.logText.insert(tk.END, pathFile + "\n")
            if self.clicked.get() == self.LISTOPTION[0]:  # Review
                self.genScriptForReviewKanji(pathFile)
            elif self.clicked.get() == self.LISTOPTION[1]:  # TuVung
                self.genScriptForTuVung(pathFile)
            elif self.clicked.get() == self.LISTOPTION[2]:  # KanjiV2
                self.genScriptForKanjiV2(pathFile)
            elif self.clicked.get() == self.LISTOPTION[3]:  # Review2
                self.genScriptForReviewKanji2(pathFile)
            elif self.clicked.get() == self.LISTOPTION[4]:  # Review2
                self.genScriptForReviewKanji3(pathFile)
            else:
                return
        else:
            self.logText.insert(tk.END, "File is not exit!!!\n", "red_text")
            return

    def genScriptForReviewKanji(self, pathFile):
        try:
            # Read data from EXCEL file
            df = pd.read_excel(pathFile)

            title = df["title"].values[0]

            # Initialize script with title
            script = ScriptLearnImage.header.replace(
                "<title></title>", f"<title>{title}</title>"
            )

            # Add flashcards from vocabulary
            for index, row in df.iterrows():
                item_script = ScriptReviewKanjiV2FromExcel.bodyFlashcard

                if not pd.isna(row["meaning"]):
                    item_script = item_script.replace(
                        '<div><p class="mean">TƯ</p></div>',
                        f'<div><p class="mean">{row["meaning"].upper()}</p></div>',
                    )
                else:
                    item_script = item_script.replace(
                        '<div><p class="mean">TƯ</p></div>',
                        f'<div><p class="mean"></p></div>',
                    )

                if not pd.isna(row["japanese"]):
                    item_script = item_script.replace(
                        '<div><p class="textJapan japan">修</p></div>',
                        f'<div><p class="textJapan japan">{row["japanese"]}</p></div>',
                    )
                else:
                    item_script = item_script.replace(
                        '<div><p class="textJapan japan">修</p></div>',
                        f'<div><p class="textJapan japan"></p></div>',
                    )

                if not pd.isna(row["submeaning"]):
                    item_script = item_script.replace(
                        '<div><p class="romaji">tôi</p></div>',
                        f'<div><p class="romaji">{row["submeaning"].lower()}</p></div>',
                    )
                else:
                    item_script = item_script.replace(
                        '<div><p class="romaji">tôi</p></div>',
                        f'<div><p class="romaji"></p></div>',
                    )
                script += item_script

            # End script
            script += ScriptLearnImage.bodyEnd

            # Write the entire script to file
            dictSaveFile = pathFile.rsplit("/", 1)[0] + "/index.html"
            with open(dictSaveFile, "w", encoding="utf-8") as index:
                index.write(script)

            # Log result
            self.logText.insert(tk.END, "Successful!!!\n", "green_text")
            self.logText.insert(tk.END, f"Save here: {dictSaveFile}\n")

        except KeyError as e:
            # Log error
            self.logText.insert(tk.END, f"KeyError: {str(e)}\n", "red_text")

    def genScriptForReviewKanji2(self, pathFile):
        try:
            # Read data from EXCEL file
            df = pd.read_excel(pathFile)

            title = df["title"].values[0]

            # Initialize script with title
            script = ScriptLearnImage.header.replace(
                "<title></title>", f"<title>{title}</title>"
            )

            # Add flashcards from vocabulary
            for index, row in df.iterrows():
                item_script = ScriptReviewKanjiV2FromExcel.bodyFlashcard3

                japanese = row["japanese"]
                submeaning = row["submeaning"].lower()
                meaning = row["meaning"].upper()

                if not pd.isna(japanese):
                    item_script = item_script.replace(
                        '<div><p class="textJapan japan">修</p></div>',
                        f'<div><p class="textJapan japan">{japanese}</p></div>',
                    )
                else:
                    item_script = item_script.replace(
                        '<div><p class="textJapan japan">修</p></div>',
                        f'<div><p class="textJapan japan"></p></div>',
                    )

                if not pd.isna(meaning):
                    item_script = item_script.replace(
                        '<div><p class="mean">TƯ</p></div>',
                        f'<div><p class="mean">{meaning}</p></div>',
                    )
                else:
                    item_script = item_script.replace(
                        '<div><p class="mean">TƯ</p></div>',
                        f'<div><p class="mean"></p></div>',
                    )

                if not pd.isna(submeaning):
                    words = [w.strip() for w in submeaning.split() if w.strip()]
                    if len(words) > 3:
                        if ", " in submeaning:
                            before, sep, after = submeaning.partition(", ")
                            item_script = item_script.replace(
                                '<div><p class="romaji">tôi</p></div>',
                                f'<div><p class="romaji">{before},<br>{after}</p></div>',
                            )
                        elif " (" in submeaning:
                            before, sep, after = submeaning.partition(" (")
                            item_script = item_script.replace(
                                '<div><p class="romaji">tôi</p></div>',
                                f'<div><p class="romaji">{before}<br>({after}</p></div>',
                            )
                        else:
                            item_script = item_script.replace(
                                '<div><p class="romaji">tôi</p></div>',
                                f'<div><p class="romaji">{submeaning}</p></div>',
                            )
                    else:
                        item_script = item_script.replace(
                            '<div><p class="romaji">tôi</p></div>',
                            f'<div><p class="romaji">{submeaning}</p></div>',
                        )
                else:
                    item_script = item_script.replace(
                        '<div><p class="romaji">tôi</p></div>',
                        f'<div><p class="romaji"></p></div>',
                    )

                script += item_script

            # End script
            script += ScriptLearnImage.bodyEnd

            # Write the entire script to file
            dictSaveFile = pathFile.rsplit("/", 1)[0] + "/index.html"
            with open(dictSaveFile, "w", encoding="utf-8") as index:
                index.write(script)

            # Log result
            self.logText.insert(tk.END, "Successful!!!\n", "green_text")
            self.logText.insert(tk.END, f"Save here: {dictSaveFile}\n")

        except KeyError as e:
            # Log error
            self.logText.insert(tk.END, f"KeyError: {str(e)}\n", "red_text")

    def genScriptForReviewKanji3(self, pathFile):
        try:
            # Read data from EXCEL file
            df = pd.read_excel(pathFile)

            title = df["title"].values[0]

            # Initialize script with title
            script = ""

            # Add flashcards from vocabulary
            for index, row in df.iterrows():
                item_script = ScriptReviewKanjiV2FromExcel.bodyFlashcard3

                japanese = row["japanese"]
                if isinstance(row["submeaning"], str):
                    submeaning = row["submeaning"].lower()
                meaning = row["meaning"].upper()

                if not pd.isna(japanese):
                    item_script = item_script.replace(
                        '<div><p class="textJapan japan">修</p></div>',
                        f'<p class="textJapan japan">{japanese}</p>',
                    )
                else:
                    item_script = item_script.replace(
                        '<div><p class="textJapan japan">修</p></div>',
                        f'<div><p class="textJapan japan"></p></div>',
                    )

                if not pd.isna(meaning):
                    item_script = item_script.replace(
                        '<div><p class="mean">TƯ</p></div>',
                        f'<p class="mean">{meaning}</p>',
                    )
                else:
                    item_script = item_script.replace(
                        '<div><p class="mean">TƯ</p></div>',
                        f'<div><p class="mean"></p></div>',
                    )

                if not pd.isna(submeaning):
                    words = [w.strip() for w in submeaning.split() if w.strip()]
                    if len(words) > 3:
                        if ", " in submeaning:
                            before, sep, after = submeaning.partition(", ")
                            item_script = item_script.replace(
                                '<div><p class="romaji">tôi</p></div>',
                                f'<p class="romaji">{before},<br>{after}</p>',
                            )
                        elif " (" in submeaning:
                            before, sep, after = submeaning.partition(" (")
                            item_script = item_script.replace(
                                '<div><p class="romaji">tôi</p></div>',
                                f'<p class="romaji">{before}<br>({after}</p>',
                            )
                        else:
                            item_script = item_script.replace(
                                '<div><p class="romaji">tôi</p></div>',
                                f'<p class="romaji">{submeaning}</p>',
                            )
                    else:
                        item_script = item_script.replace(
                            '<div><p class="romaji">tôi</p></div>',
                            f'<p class="romaji">{submeaning}</p>',
                        )
                else:
                    item_script = item_script.replace(
                        '<div><p class="romaji">tôi</p></div>',
                        f'<p class="romaji"></p>',
                    )

                script += item_script

            # End script
            # script += ScriptLearnImage.bodyEnd

            # Write the entire script to file
            dictSaveFile = pathFile.rsplit("/", 1)[0] + "/index.html"
            with open(dictSaveFile, "w", encoding="utf-8") as index:
                index.write(script)

            # Log result
            self.logText.insert(tk.END, "Successful!!!\n", "green_text")
            self.logText.insert(tk.END, f"Save here: {dictSaveFile}\n")

        except KeyError as e:
            # Log error
            self.logText.insert(tk.END, f"KeyError: {str(e)}\n", "red_text")

    def genScriptForTuVung(self, pathFile):
        try:
            # Read data from EXCEL file
            df = pd.read_excel(pathFile)

            title = df["title"].values[0]

            # Initialize script with title
            script = ScriptLearnImage.header.replace(
                "<title></title>", f"<title>{title}</title>"
            )

            # Add flashcards from vocabulary
            for index, row in df.iterrows():
                item_script = ScriptReviewKanjiV2FromExcel.bodyFlashcard2

                japanese = row["japanese"]
                if not pd.isna(japanese):
                    if len(japanese) < 7:
                        item_script = item_script.replace(
                            '<div><p class="textJapan japan">修</p></div>',
                            f'<div><p class="textJapan japan">{japanese}</p></div>',
                        )
                    else:
                        item_script = item_script.replace(
                            '<div><p class="textJapan japan">修</p></div>',
                            f'<div><p class="textJapan japan japan1">{japanese}</p></div>',
                        )

                else:
                    item_script = item_script.replace(
                        '<div><p class="textJapan japan">修</p></div>',
                        f'<div><p class="textJapan japan"></p></div>',
                    )

                subjapanese = row["subjapanese"]
                if not pd.isna(subjapanese):
                    if " " in subjapanese:
                        before, sep, after = subjapanese.partition(" ")
                        item_script = item_script.replace(
                            '<div><p class="subjapan">TƯ</p></div>',
                            f'<div><p class="subjapan subjapan1">{before}<br>{after}</p></div>',
                        )
                    else:
                        item_script = item_script.replace(
                            '<div><p class="subjapan">TƯ</p></div>',
                            f'<div><p class="subjapan">{subjapanese}</p></div>',
                        )
                else:
                    item_script = item_script.replace(
                        '<div><p class="subjapan">TƯ</p></div>',
                        f'<div><p class="subjapan"></p></div>',
                    )

                meaning = row["meaning"].lower()
                if not pd.isna(meaning):  # mean
                    if not pd.isna(subjapanese) and " " in subjapanese:
                        item_script = item_script.replace(
                            '<div><p class="mean">tôi</p></div>',
                            f'<div><p class="mean mean1">{meaning}</p></div>',
                        )
                    else:
                        item_script = item_script.replace(
                            '<div><p class="mean">tôi</p></div>',
                            f'<div><p class="mean">{meaning}</p></div>',
                        )
                else:
                    item_script = item_script.replace(
                        '<div><p class="mean">tôi</p></div>',
                        f'<div><p class="mean"></p></div>',
                    )
                script += item_script

            # End script
            script += ScriptLearnImage.bodyEnd

            # Write the entire script to file
            dictSaveFile = pathFile.rsplit("/", 1)[0] + "/index.html"
            with open(dictSaveFile, "w", encoding="utf-8") as index:
                index.write(script)

            # Log result
            self.logText.insert(tk.END, "Successful!!!\n", "green_text")
            self.logText.insert(tk.END, f"Save here: {dictSaveFile}\n")

        except KeyError as e:
            # Log error
            self.logText.insert(tk.END, f"KeyError: {str(e)}\n", "red_text")

    def genScriptForKanjiV2(self, pathFile):
        try:
           # Read data from EXCEL file
            df = pd.read_excel(pathFile)

            # Initialize script with title
            title = df["title"].values[0]
            script = ScriptKanjiV2.header.replace("<title></title>", f"<title>{title}</title>")
            vocabulary = []
            for index, row in df.iterrows():
                item_script = ScriptKanjiV2.bodySwipper1

                japan = row["japanese"]
                # print(japan)
                if not pd.isna(japan):
                    item_script = item_script.replace(
                        '<img src="../../../../GIF/kanji/gif/150x150/.gif" class="border_all" />',
                        f'<img src="../../../../GIF/kanji/gif/150x150/{japan}.gif" class="border_all" />'
                )
                else:
                    self.logText.insert(tk.END, f"Japanese length in Json haven't supported")
                    return

                subindex = index%10
                if subindex != 0:
                   item_script = item_script.replace(
                      '<div class="swiper-slide slide">',
                      f'<div class="swiper-slide slide{subindex}">'
                   ).replace(
                      '<button class="open_button slide" type="button">Help</button>',
                      f'<button class="open_button slide{subindex}" value="{index}" type="button">Help</button>')
                else:
                    item_script = item_script.replace(
                        '<button class="open_button slide" type="button">Help</button>',
                        f'<button class="open_button slide" value="{index}" type="button">Help</button>')
                script += item_script

                meaning = row["meaning"].upper()
                submeaning = row["submeaning"]
                vocabulary.append(
                    {
                    "japan" : japan,
                    "meaning" : meaning,
                    "submeaning" : submeaning
                    }
                )
            data = {
                "title" : title,
                "vocabulary" : vocabulary
            }
            script += ScriptKanjiV2.bodyEnd

            # Write the entire script to file
            dictSaveFile = pathFile.rsplit('/', 1)[0] + "/index.html"
            with open(dictSaveFile, "w", encoding="utf-8") as index:
                index.write(script)

            dictSaveJsonFile = pathFile.rsplit('/', 1)[0] + "/romaji.json"
            with open(dictSaveJsonFile, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=4, ensure_ascii=False)

            # Log result
            self.logText.insert(tk.END, "Successful!!!\n", "green_text")
            self.logText.insert(tk.END, f"Save here: {dictSaveFile}\n")

        except KeyError as e:
            # Log error
            self.logText.insert(tk.END, f"KeyError: {str(e)}\n", "red_text")