import { Request, Response } from 'express';
import { Phrase } from '../models/Phrase'


/* Para criar uma frase */
export const createPhrase = async (req: Request, res: Response) => {
  let { author, txt } = req.body;

  let newPhrase = await Phrase.create({
    author, txt
  });
  res.status(201).json({ id: newPhrase.id, author, txt })
}


/* Para listar todas as frases */
export const listPhrase = async (req: Request, res: Response) => {
  let list = await Phrase.findAll();
  res.status(200).json({ list });
};

/* Para listar uma frase específica */

export const getPhrase = async (req: Request, res: Response) => {
  let { id } = req.params;

  let phrase = await Phrase.findByPk(id);
  if (phrase) {
    res.json({ phrase })
  } else {
    res.json({ error: "Frase não localizada!" })
  };

};

/* Para atualizar um frase especifica */

export const updatePhrase = async (req: Request, res: Response) => {
  let { id } = req.params;
  let { author, txt } = req.body

  let phrase = await Phrase.findByPk(id);
  if (phrase) {
    phrase.author = author;
    phrase.txt = txt;
    await phrase.save();

    res.json({ phrase })

  } else {
    res.json({ error: "Frase não encontrada" })
  }

  res.json({});
}

/* Para deletar uma frase específica */

export const deletePhrase = async (req: Request, res: Response) => {
  let { id } = req.params;

  await Phrase.destroy({
    where: { id }
  })

  res.json({})
}
