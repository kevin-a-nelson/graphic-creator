import React from 'react'
import EditableLabel from 'react-editable-label'

const Title = (props) => {

    const { width } = props

    return (
        <div className="title"
            style={
                { marginTop: `${width / 100}px` }
            }
        >
            <i>
                <EditableLabel
                    initialValue={"19's - 20's EXAMPLE BRACKET"}
                    save={value => { console.log(`Saving '${value}'`); }}
                />
            </i>
        </div >
    )
}

export default Title