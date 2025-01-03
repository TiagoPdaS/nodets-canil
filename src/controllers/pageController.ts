import {Request, Response} from 'express';
import { Pet } from '../models/pet';
import {createMenuObjects} from '../helpers/createMenuObjects'

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        menu: createMenuObjects('all'),
        banner: {
        title: 'Todos os animais Cadastrados',
        background: 'allanimals.jpg'
        },
        list
    });
}
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuObjects('dog'),
        banner: {
        title: 'Cachorros',
        background: 'banner_dog.jpg'
        },
        list
    });
}
export const cats = (req: Request, res: Response) => {

    let list = Pet.getFromType('cat');
    res.render('pages/page', {
        menu: createMenuObjects('cat'),
        banner: {
        title: 'Gatos',
        background: 'banner_cat.jpg'
        },
        list
    });
}
export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');

    res.render('pages/page', {
        menu: createMenuObjects('fish'),
        banner: {
        title: 'Peixes',
        background: 'banner_fish.jpg'
        },
        list
    });

}
export const outros = (req: Request, res: Response) => {
    let list = Pet.getFromType('outros');

    res.render('pages/page', {
        menu: createMenuObjects('outros'),
        banner: {
        title: 'Outros Animais',
        background: 'dragao.jpeg'
        },
        list
    });
}

