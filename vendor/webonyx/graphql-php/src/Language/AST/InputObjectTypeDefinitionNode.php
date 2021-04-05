<?php

declare(strict_types=1);

namespace GraphQL\Language\AST;

class InputObjectTypeDefinitionNode extends Node implements TypeDefinitionNode
{
    /** @var string */
    public $kind = NodeKind::INPUT_OBJECT_TYPE_DEFINITION;

    /** @var NameNode */
    public $name;

    /** @var NodeList<DirectiveNode>|null */
    public $directives;

    /** @var NodeList<InputValueDefinitionNode>|null */
    public $fields;

    /** @var StringValueNode|null */
    public $description;
}