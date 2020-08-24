import React from "react"
import { Link, navigate } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import { CardContent, Typography, Button, CardActions } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles({
  root: {
    maxWidth: 380,
  },
  cardAction: {
    marginLeft: "auto",
  },
})

const BlogCard = ({ data }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <Link to={data.fields.slug}>
            <Img fluid={data.frontmatter.featuredImage.childImageSharp.fluid} />
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
    </Grid>
  )
}

export default BlogCard
