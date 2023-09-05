# FASTA File Format
# =================

"""
    FASTA

Module under FASTX with code related to FASTA files.
"""
module FASTA

import Automa
import Automa.RegExp: @re_str
import Automa.Stream: @mark, @markpos, @relpos, @abspos
import BioGenerics: BioGenerics
import StringViews: StringView
import TranscodingStreams: TranscodingStreams, TranscodingStream, NoopStream

import ..FASTX: identifier, description, sequence, UTF8, seqsize, throw_parser_error, truncate, memcmp, appendfrom!, CONTEXT

include("record.jl")
include("readrecord.jl")
include("index.jl")
include("reader.jl")
include("writer.jl")

end
