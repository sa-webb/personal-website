import React from "react"
import { Link, navigate } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import { CardContent, Typography, Button, CardActions } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  // media: {
  //   height: 100,
  // },
  cardAction: {
    marginLeft: "auto",
  },
})

const BlogCard = ({ data }) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.media}>
        <Link to={data.fields.slug}>
        <Img sizes={data.frontmatter.featuredImage.childImageSharp.sizes} />
        </Link>
      </CardActionArea>
      <CardContent>
        <Typography component="p" variant="h6">
          <Link to={data.fields.slug}>{data.frontmatter.title}</Link>
        </Typography>
        <Typography component="p">{data.frontmatter.date}</Typography>
        <Typography component="p">{data.frontmatter.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          className={classes.cardAction}
          onClick={event => {
            event.preventDefault()
            navigate(data.fields.slug)
          }}
          size="small"
          color="primary"
        >
          Read
        </Button>
      </CardActions>
    </Card>
  )
}

export default BlogCard
