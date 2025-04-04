import React from 'react'
import { KeyContainer, BulletPoint } from './styles'

export default function Key() {
  return (
    <KeyContainer role='list'>
        <BulletPoint role='listitem'>
            Not Completed
        </BulletPoint>
        <BulletPoint role='listitem'>
            Completed
        </BulletPoint>
    </KeyContainer>
  )
}

