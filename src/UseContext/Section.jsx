import React, { Children } from 'react'
import { LevelContext } from './LevelContext'
function Section({level,children}) {
    return (
        <Section className="section">
            <LevelContext.Provider value={level}>
                {Children}
            </LevelContext.Provider>
        </Section>
    )
}

export default Section
