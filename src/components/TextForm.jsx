import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newUpText = text.toUpperCase();
        setText(newUpText);
        props.showAlert("Convert to uppercase!", "success");
    };

    const handleLoClick = () => {
        let newLoText = text.toLowerCase();
        setText(newLoText);
        props.showAlert("Convert to lowercase!", "success");
    };

    const handleClearClick = () => {
        setText("");
        props.showAlert("Clear text!", "success");
    };

    const handleSentenceCase = () => {
        let newSentenceText = text
            .toLowerCase()
            .replace(/(^\s*|\.\s+)([a-z])/g, (match) => match.toUpperCase());
        setText(newSentenceText);
    };

    const handleCapitalizedCase = () => {
        let newCapitalizedText = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(newCapitalizedText);
        props.showAlert("Text capitalize!", "success");
    };

    const handleAlternatingCase = () => {
        let newAlternatingText = text
            .split('')
            .map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
            .join('');
        setText(newAlternatingText);
    };

    const handleTitleCase = () => {
        let newTitleText = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setText(newTitleText);
    };

    const handleInverseCase = () => {
        let newInverseText = text
            .split('')
            .map(char => (char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()))
            .join('');
        setText(newInverseText);
    };

    const handleDownload = () => {
        const element = document.createElement('a');
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'text.txt';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        // alert('Text copied to clipboard!');
        props.showAlert("Text copied to clipboard!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra spaces", "success");
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{color: props.mode === "dark" ? "white" : "#042743"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control green-900 " value={text} style={{backgroundColor: props.mode === "dark" ? "#042743" : "white", color: props.mode === "dark" ? "white" : "#042743"}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <h2>Text Actions</h2>
                <div className="row g-2">
                    {/* Text Transformation Buttons */}
                    <div className="col-12 col-md-6 d-flex flex-wrap">
                        <button className="btn btn-primary m-1" onClick={handleUpClick}>Uppercase</button>
                        <button className="btn btn-primary m-1" onClick={handleLoClick}>Lowercase</button>
                        <button className="btn btn-primary m-1" onClick={handleSentenceCase}>Sentence Case</button>
                        <button className="btn btn-primary m-1" onClick={handleCapitalizedCase}>Capitalized Case</button>
                        <button className="btn btn-primary m-1" onClick={handleAlternatingCase}>Alternating Case</button>
                        <button className="btn btn-primary m-1" onClick={handleTitleCase}>Title Case</button>
                        <button className="btn btn-primary m-1" onClick={handleInverseCase}>Inverse Case</button>
                        <button className="btn btn-primary m-1" onClick={handleExtraSpace}>Remove extra space</button>
                    </div>

                    {/* Action Buttons */}
                    <div className="col-12 col-md-6 d-flex flex-wrap">
                        <button className="btn btn-success m-1" onClick={handleDownload}>Download Text</button>
                        <button className="btn btn-warning m-1" onClick={handleCopy}>Copy to Clipboard</button>
                        <button className="btn btn-danger m-1" onClick={handleClearClick}>Clear Text</button>
                    </div>
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "#042743"}}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}
