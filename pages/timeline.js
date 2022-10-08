import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

import OppositeContentTimeline from '@/components/Timeline.js'

export default function Timelines() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <OppositeContentTimeline></OppositeContentTimeline>
    </>
  )
}
