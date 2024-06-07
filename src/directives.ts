import { fs } from 'fs';
import { DirectiveSpec, GenericNode, fileError } from 'myst-common';

export const itkView2d: DirectiveSpec = {
  name: 'itk:view2d',
  doc: 'Embed an ITK 2d view widget in the document',
  arg: {
    type: String,
    required: true,
    doc: 'Addressable URL to a ZARR file.',
  },
  validate(data, vfile) {
    // potentially ping url here, validate URL is well formed, etc...
    // if (url-unreachable) {
    //   fileError(vfile, `the url cannot be reached specified does not exist: ${data.options['image-url']}.`);
    // }

    return data;
  },
  run(data, vfile, opts) {
    return [
      {
        type: 'itkView2d',
        url: data.arg,
        ...data.options,
      },
    ] as GenericNode[];
  },
};
