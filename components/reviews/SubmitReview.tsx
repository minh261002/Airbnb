"use client"

import React, { useState } from 'react'
import { SubmitButton } from '../form/Button'
import FormContainer from '../form/FormContainer'
import { Card } from '../ui/card'
import RatingInput from '../form/RatingInput'
import TextAreaInput from '../form/TextareaInput'
import { Button } from '../ui/button'
import { createReviewAction } from '@/utils/actions'

const SubmitReview = ({ propertyId }: { propertyId: string }) => {
    const [isReviewFormVisible, setIsReviewFormVisible] = useState(false)
    return (
        <div className='mt-8'>
            <Button onClick={() => setIsReviewFormVisible(!isReviewFormVisible)}>
                {isReviewFormVisible ? 'Cancel' : 'Write a Review'}
            </Button>

            {
                isReviewFormVisible && (<Card className='p-8 my-8'>
                    <FormContainer action={createReviewAction}>
                        <input type="hidden" name='propertyId' value={propertyId} />
                        <RatingInput name='rating' />
                        <TextAreaInput name="comment" labelText="Yout Thoughts on this property" />
                        <SubmitButton text='Submit Review' className='mt-4' />
                    </FormContainer>
                </Card>)
            }
        </div>
    )
}

export default SubmitReview