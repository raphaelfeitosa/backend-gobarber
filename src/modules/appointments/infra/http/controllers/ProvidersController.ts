import { Request, Response } from 'express';

import { container } from 'tsyringe';

import ListProvidersService from '@modules/appointments/services/ListProvidersServices';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listproviders = container.resolve(ListProvidersService);

    const providers = await listproviders.execute({
      user_id,
    });

    return response.json(providers);
  }
}
