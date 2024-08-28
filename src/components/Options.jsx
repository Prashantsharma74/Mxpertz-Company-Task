import React from 'react'

function Options({output}) {
    // console.log(output);
    
    return (
        <>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="option1" />
                <label class="form-check-label" for="option1">
                    {output}
                </label>
            </div>
        </>
    )
}

export default Options
