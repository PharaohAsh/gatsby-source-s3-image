import { ExifParserFactory } from 'ts-exif-parser'
import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from 'gatsby/graphql'
import _ from 'lodash'
import fracty from 'fracty'

import fs from 'fs'

import ExifData from './types/ExifData'
import S3ImageAssetNode from './types/S3ImageAssetNode'

const resolveExifData = _.memoize((
  image: S3ImageAssetNode // eslint-disable
): ExifData | undefined => {
  const file = fs.readFileSync(image.absolutePath)
  const tags = ExifParserFactory.create(file).parse().tags

  const ExposureTime = _.get(tags, 'ExposureTime')
  const ShutterSpeedFraction = fracty(ExposureTime)

  return {
    ShutterSpeedFraction,
    ..._.pick(tags, [
      'DateTimeOriginal',
      'DocumentName',
      'Exposure',
      'ExposureTime',
      'FNumber',
      'FocalLength',
      'ImageDescription',
      'ISO',
      'LensModel',
      'Model',
      'ShutterSpeedValue',
      'UserComment',
    ]),
  }
})

interface ExtendNodeTypeOptions {
  type: {
    name: string
  }
}

export default ({ type }: ExtendNodeTypeOptions) => {
  if (type.name !== 'S3ImageAsset') {
    return Promise.resolve()
  }

  return Promise.resolve({
    ETag: { type: GraphQLString },
    EXIF: {
      resolve: (image: S3ImageAssetNode) => ({
        ...type,
        ...resolveExifData(image),
      }),
      type: new GraphQLObjectType({
        fields: {
          DateCreatedISO: { type: GraphQLString },
          DateTimeOriginal: { type: GraphQLInt },
          DocumentName: { type: GraphQLString },
          Exposure: { type: GraphQLString },
          ExposureTime: { type: GraphQLFloat },
          FNumber: { type: GraphQLFloat },
          FocalLength: { type: GraphQLFloat },
          ImageDescription: { type: GraphQLString },
          ISO: { type: GraphQLInt },
          LensModel: { type: GraphQLString },
          Model: { type: GraphQLString },
          ShutterSpeedFraction: { type: GraphQLString },
          ShutterSpeedValue: { type: GraphQLFloat },
          UserComment: { type: GraphQLString },
        },
        name: 'ExifData',
      }),
    },
    Key: { type: GraphQLString },
  })
}
