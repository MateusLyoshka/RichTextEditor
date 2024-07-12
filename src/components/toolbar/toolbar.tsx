"use client"

import { SetStateAction, useRef, useState } from "react"

const Tools = () => {
    const editorRef = useRef(null)
    const colorInputRef = useRef<HTMLInputElement>(null)
    const [isBold, setBold] = useState(false)
    const [isItalic, setItalic] = useState(false)
    const [isUnderlined, setUnderline] = useState(false)
    const [color, setColor] = useState('#000000')
    
    const applystyle = (style:any) => {
        const selection = window.getSelection();
        if (selection?.rangeCount == 0) return;
    
        const range = selection?.getRangeAt(0);
        const span = document.createElement('span');
        if (range) {
            span.appendChild(range.extractContents());
            span.style.cssText = style;
            range.insertNode(span);
        }
    }

    const boldclick = () => {
        setBold(!isBold)
        applystyle(`font-weight: ${!isBold ? 'bold' : 'normal'}`);
    }
    const italicclick = () => {
        setItalic(!isItalic)
        applystyle(`font-style: ${!isItalic ? 'italic' : 'normal'}`);
    }
    const underlineclick = () => {
        setUnderline(!isUnderlined)
        applystyle(`text-decoration: ${!isUnderlined ? 'underline' : 'none'}`);
    }
    const handleChange = (event: { target: { value: SetStateAction<string> } }) => setColor(event.target.value)

    const handleButtonClick = () => {
      if (colorInputRef.current) {
        colorInputRef.current.click();
      }
    };

    const applyColor = () => applystyle(`color: ${color}`)


    return (
      <div className="flex justify-center flex-col items-center text-black">
        <div className="bg-gray-200 rounded-full w-full">
          <div className="p-2 ml-20 flex">
            <button
              className={` h-8 w-8 hover:bg-[#d1d5db] bg-transparent rounded-md ${
                isBold ? "font-bold" : "font-normal"
              }`}
              onClick={boldclick}
            >
              B
            </button>
            <button
              className={`h-8 w-8 hover:bg-[#d1d5db] bg-transparent rounded-md ${
                isItalic ? "italic" : "font-normal"
              }`}
              onClick={italicclick}
            >
              I
            </button>
            <button
              className={`h-8 w-8 hover:bg-[#d1d5db] bg-transparent rounded-md ${
                isUnderlined ? "underline" : "font-normal"
              }`}
              onClick={underlineclick}
            >
              U
            </button>
            <div className="flex flex-col relative justify-end items-center group">
              <button
                className={`h-8 w-8 group-hover:bg-gray-300 bg-transparent rounded-md`}
                onClick={handleButtonClick}
              >
                A
              </button>
              <input
                type="color"
                value={color}
                onChange={handleChange}
                ref={colorInputRef}
                onInput={applyColor}
                className="h-3 w-7 bg-transparent absolute top-5 "
              />
            </div>
          </div>
        </div>
        <div 
        className="border-spacing-4 border-gray-300 border-2 w-[756px] flex mt-10 h-96 overflow-auto" 
        contentEditable 
        ref={editorRef}
        ></div>
      </div>
    );
}

export default Tools